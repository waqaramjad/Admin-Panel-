import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../History';
import Nav from '../navBar'
import { editTodo } from '../../store/action/action'
import { apps } from 'firebase';
import { browserHistory } from 'react-router';
import Quill from 'quill';
import FileUploader from "react-firebase-file-uploader";
import { Panel , PanelGroup ,ProgressBar,  Button} from 'react-bootstrap';
import ReactQuill from 'react-quill'; // ES6
import '../Css/check.css'
import PropTypes from 'prop-types'
// import { Resize, BaseModule } from 'quill-image-resize-module';
var ReactDOMServer = require('react-dom/server');
var HtmlToReactParser = require('html-to-react').Parser;


var style = {
    mainDiv : {
        marginLeft : '2%'
    } , 

    Label  : {
        marginTop : '1%' , 
        marginBottom : '1%' , 
        fontSize : '14px'
        
    }
}


class EditPost extends Component {
    constructor(props) {

        super(props);

        this.state = {
            textArea : '' , 
            title : '' , 
            username: "",
            avatar: "",
            isUploading: false,
            progress: 0,
            avatarURL: "" , 
            editorHtml : '',  theme: 'snow' , check:''

        }


        // this.handleChange = this.handleChange.bind(this)
        this.handleChangetitle = this.handleChangetitle.bind(this)
        this.pushData = this.pushData.bind(this)

   
    }
    

    handleChangetitle(event){
this.setState({
    title : event.target.value
})

console.log(this.state.title)
}
pushData(){
    
    console.log('this.state.value')
    var title = this.state.title
    var editorHtml = this.state.editorHtml

    var dataObject = {
        title , 
        editorHtml
    }
    var UID = this.props.location.UID
    console.log(this.props.location.todo.category)
    var category = this.props.location.todo.category
    this.props.editTodo(dataObject , UID , category)

    console.log(dataObject)
        }


        componentDidMount() {
            this._isMounted = true;
// var a = 
            window.onpopstate = ()=> {
 history.push({
           
            UID : 'wiki test 1 ' , 
            index : 'index' , 
            status : true 
            
          })
              console.log('check')
            }
          }

    render() {

        // console.log(this.state.currendata)
        // console.log(this.props.location.todo)
        var todo = this.props.location.todo.editorHtml
        var title = this.props.location.todo.title
        console.log(title)
        console.log(this.props.location)
        if(this.state.editorHtml==='')
        {

            this.setState({
                editorHtml : todo  , 
                title : title 
            })
        }
        


        

        return (
            <div>
                 <Nav />

                 <div style={style.mainDiv}>


                 <div class="form-group">
                 <label for="usr" style={{fontSize:18}}>title:</label>
  <input type="text" className="form-control" id="usr" style={{width: '70%'}} value={this.state.title} onChange={this.handleChangetitle} />
</div>

<div style={{marginRight:'30%'}}>
            <ReactQuill 
              theme={this.state.theme}
              onChange={this.handleChange}
              value={this.state.editorHtml}
              modules={EditPost  .modules}
              formats={EditPost  .formats}
            //   bounds={'.app'}
            placeholder={'Write Article here '}
            style={{qlEditor : {
                minHeight: '18em'
              }}}
             />
           
           </div>


     
<br/>
<button className="btn btn-primary btnHeight" type="button" onClick={this.pushData} >Update </button>
</div>
               
            </div>)
    }





}

EditPost  .modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    } , 
   
  }
  /* 
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  EditPost  .formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video' , 'font-Size'
  ]
  
  /* 
   * PropType validation
   */
  EditPost  .propTypes = {
    placeholder: PropTypes.string,
  }



function mapStateToProp(state) {
    return ({
        studentData: state.root.getDataByAdmin
    })  
}

function mapDispatchToProp(dispatch) {
    console.log('dispatch')
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        editTodo: (data , index , category) => {
            dispatch(editTodo(data , index , category))
        }
    })
}

// export default Company;
export default connect(mapStateToProp, mapDispatchToProp)(EditPost);