import Parser from 'html-react-parser';
import React, { Component } from 'react';
// import { ImageResize } from 'quill-image-resize-module';
import { connect } from 'react-redux';
// import { signinAction } from '../store/action/action';
// import './Css/signup.css'
import history from '../../History';
import Nav from '../navBar'
import { postArticles } from '../../store/action/action'
import firebase from 'firebase';
import { browserHistory } from 'react-router';
// import Quill from 'quill';
import FileUploader from "react-firebase-file-uploader";
import { Panel , PanelGroup ,ProgressBar,  Button , Modal} from 'react-bootstrap';
import ReactQuill from 'react-quill'; // ES6
import '../Css/check.css'
import PropTypes from 'prop-types'
// import { Resize, BaseModule } from 'quill-image-resize-module';
var ReactDOMServer = require('react-dom/server');
var HtmlToReactParser = require('html-to-react').Parser;



var style = {
    mainDiv : {
        marginLeft : '2%'
    }
}
class CreatePOst extends Component {
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


        this.handleChange = this.handleChange.bind(this)
        this.handleChangetitle = this.handleChangetitle.bind(this)
        this.pushData = this.pushData.bind(this)

   
    }
    

    handleChangeUsername = event =>{

    this.setState({ username: event.target.value });
    console.log(this.state)
    console.log(event)
}


handleChange (html) {
    console.log(html)
      this.setState({ editorHtml: html });
  }
  
  handleThemeChange (newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({ theme: newTheme })
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
 

//     handleChange(event){
// this.setState({
//     textArea : event.target.value
// })

// console.log(this.state.textArea)
// }
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
    var avatar = this.state.avatar
    var avatarURL = this.state.avatarURL
    
    var dataObject = {
        title , 
        
        avatar , 
        avatarURL ,
        editorHtml

        
    }
    this.props.postArticles(dataObject)
this.setState({
  title : '', 
        
        avatar :'', 
        avatarURL :'',
        editorHtml:''
})
    console.log(dataObject)
       }

        componentDidMount() {
          var check =  <h1 >title:</h1>
            this._isMounted = true;
            this.setState({
              check : check
            })
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
        console.log(this.state)
        var htmlInput = '<div><h1>Title</h1><p>A paragraph</p></div>';
var htmlToReactParser = new HtmlToReactParser();
var reactElement = htmlToReactParser.parse(htmlInput);
var reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);
 console.log(reactHtml)
        window.onbeforeunload = function () {
            console.log('back press')

          }
          console.log(PropTypes)

        return (
            <div>
                 <Nav />

<div style={style.mainDiv}>
                 <div class="form-group">
  <label for="usr" style={{fontSize:18}}>title:</label>
  <input type="text" className="form-control" id="usr" style={{width: '70%'}} value={this.state.title} onChange={this.handleChangetitle} />

</div>
                 {/* <textarea name="body"
          onChange={this.handleChange}
          style={{height: 250 , width : '70%'}}
          /> */}

<div style={{marginRight:'30%'}}>
            <ReactQuill 
              theme={this.state.theme}
              onChange={this.handleChange}
              value={this.state.editorHtml}
              modules={CreatePOst.modules}
              formats={CreatePOst.formats}
            //   bounds={'.app'}
              placeholder={'Write Article here '}
              style={{qlEditor : {
                minHeight: '18em'
              }}}
             />
           </div>

     
<br/>

<div>
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
<button className="btn btn-primary btnHeight" type="button" onClick={this.pushData} >Post </button>
</div>
               
            </div>)
    }





}

CreatePOst.modules = {
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
  CreatePOst.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video' , 'font-Size'
  ]
  
  /* 
   * PropType validation
   */
  CreatePOst.propTypes = {
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
        postArticles: (user) => {
            dispatch(postArticles(user))
        }
    })
}



// export default Company;
export default connect(mapStateToProp, mapDispatchToProp)(CreatePOst);