import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../../History';
import Nav from '../navBar'
import { editTodo } from '../../store/action/action'
import { apps } from 'firebase';
import { browserHistory } from 'react-router';
import Quill from 'quill';
import FileUploader from "react-firebase-file-uploader";
// import { Panel , PanelGroup ,ProgressBar,  Button} from 'react-bootstrap';
import ReactQuill from 'react-quill'; // ES6
import '../Css/check.css'
import PropTypes from 'prop-types'
import firebase from 'firebase';
import { Panel , ButtonToolbar , PanelGroup ,ProgressBar,  Button , Modal , DropdownButton , MenuItem } from 'react-bootstrap';

// import { Resize, BaseModule } from 'quill-image-resize-module';
var ReactDOMServer = require('react-dom/server');
var HtmlToReactParser = require('html-to-react').Parser;
const BUTTONS = ['Primary'];


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
            editorHtml : '',  theme: 'snow' , check:'' , author  : '' , category : ''

        }


        this.handleChange = this.handleChange.bind(this)
        this.handleChangetitle = this.handleChangetitle.bind(this)
        this.pushData = this.pushData.bind(this)
        this.onSelect = this.onSelect.bind(this)
        this.renderDropdownButton = this.renderDropdownButton.bind(this)
        this.handleChangeAuthor = this.handleChangeAuthor.bind(this)

   
    }
    

    handleChangetitle(event){
this.setState({
    title : event.target.value
})


console.log(this.state.title)
}

  
handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
handleProgress = progress => this.setState({ progress });
handleUploadError = error => {
  this.setState({ isUploading: false });
  console.error(error);
};
handleUploadSuccess = filename => {

  console.log(this.state)
  this.setState({ avatar: filename, progress: 100, isUploading: false });
  firebase
    .storage()
    .ref("images")
    .child(filename)
    .getDownloadURL()
    .then(url => this.setState({ avatarURL: url }));
};

handleChange (html) {
    console.log(html)
      this.setState({ editorHtml: html });
  }

  handleChangeAuthor(event){
    this.setState({
        author : event.target.value
    })
    
    console.log(this.state.author)
    }
  onSelect(eventKey) {
    // alert(`Alert from menu item.\neventKey: ${eventKey}`);

    this.setState({
      category : eventKey
    })
    console.log(this.state.category)
  } 
  renderDropdownButton(title, i) {
    return (
      <DropdownButton
        bsStyle={title.toLowerCase()}
        title='Articles'
        key={i}
        id={`dropdown-basic-${i}`}
      >
        <MenuItem eventKey="Seminary"  onSelect={this.onSelect}>Seminary </MenuItem>
        <MenuItem eventKey="Sports" onSelect={this.onSelect}>Sports</MenuItem>
        <MenuItem eventKey="ChurchPlanning" onSelect={this.onSelect}>Church Planning</MenuItem>
        <MenuItem eventKey="Medical" onSelect={this.onSelect}>Medical</MenuItem>
        <MenuItem eventKey="CommunityDevelopment"onSelect={this.onSelect}>Community Development </MenuItem>
        <MenuItem eventKey="KingdomBusiness" onSelect={this.onSelect}>Kingdom Business</MenuItem>
       
       
        
      </DropdownButton>
    );
  }

pushData(){
    
    console.log('this.state.value')
    var title = this.state.title
    var editorHtml = this.state.editorHtml
    var avatarURL =  this.state.avatarURL
    var category = this.state.category
    var author = this.state.author
    var avatar = this.state.avatar

    console.log(editorHtml)

    var dataObject = {
        title , 
        editorHtml , avatarURL,avatar,author
    }
    // console.log(this.props.location.todo.category)
    if(this.props.location.todo!=undefined){
        var UID = this.props.location.UID
        var previous = this.props.location.todo.category

        this.props.editTodo(dataObject , UID , category , previous)
        // history.push('/Admin')

    }
    else{
        alert('Firest Select Some Article ')
    }

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

            if(this.state.editorHtml==='' && this.props.location.todo!=undefined)
            {
                var data = this
                var editorHtml = data.props.location.todo.editorHtml
                var title = data.props.location.todo.title
                var avatarURL = data.props.location.todo.avatarURL
                var category = data.props.location.todo.category
                var author = data.props.location.todo.author
                var avatar = data.props.location.todo.avatar
        
                this.setState({
                    title , 
        
                    avatar , 
                    avatarURL ,
                    editorHtml , 
                    category ,
                    author
                })
            }
            else{
                alert('Firest Select Some Article ')
            }
          }

        //   componentWillReceiveProps(data){

        //     console.log(data.props.location)
        //     var editorHtml = data.props.location.todo.editorHtml
        //     var title = data.props.location.todo.title
        //     var avatarURL = data.props.location.todo.avatarURL
        //     var category = data.props.location.todo.category
        //     var author = data.props.location.todo.author
        //     var avatar = data.props.location.todo.avatar

        //     {

        //         this.setState({
        //             title , 
        
        //             avatar , 
        //             avatarURL ,
        //             editorHtml , 
        //             category ,
        //             author
        //         })
        //     }
        //   }

    render() {

        console.log(this.props.location)
        console.log(this.state)      
        


        

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

           <ButtonToolbar>{BUTTONS.map(this.renderDropdownButton)}</ButtonToolbar>
<br/>

<div>

<label for="usr" style={{fontSize:16}}>Author:</label>
  <input type="text" className="form-control" id="usr" style={{width: '60%'}} value={this.state.author} onChange={this.handleChangeAuthor} />
  <br/>
        <form>
          {this.state.isUploading && <ProgressBar striped bsStyle="info" now={40} />}
          <label style={{backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor'}}>
    Select your Image
    <FileUploader
      hidden
      accept="image/*"
      storageRef={firebase.storage().ref('images')}
      onUploadStart={this.handleUploadStart}
      onUploadError={this.handleUploadError}
      onUploadSuccess={this.handleUploadSuccess}
      onProgress={this.handleProgress}
    />
  </label> <br/>
          <img style={{width:'4%'}} src={this.state.avatarURL} />

          </form>


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
        editTodo: (data , index , category , previous ) => {
            dispatch(editTodo(data , index , category , previous))
        }
    })
}

// export default Company;
export default connect(mapStateToProp, mapDispatchToProp)(EditPost);