import Parser from 'html-react-parser';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signinAction } from '../store/action/action';
// import './Css/signup.css'
import history from '../../History';
import Nav from '../navBar'
import { postArticles } from '../../store/action/action'
import firebase from 'firebase';
import { browserHistory } from 'react-router';
import FileUploader from "react-firebase-file-uploader";
import { Panel , PanelGroup ,ProgressBar,  Button} from 'react-bootstrap';
import ReactQuill from 'react-quill'; // ES6
import PropTypes from 'prop-types'
import '../Css/check.css'
var ReactDOMServer = require('react-dom/server');
var HtmlToReactParser = require('html-to-react').Parser;
// import { render } from 'react-dom';
// var config = {
//     apiKey: "AIzaSyDcyZcVQP8nuHcMJsKd5wHxoaerUW6apZQ",
//     authDomain: "waqarchatapp.firebaseapp.com",
//     databaseURL: "https://waqarchatapp.firebaseio.com",
//     projectId: "waqarchatapp",
//     storageBucket: "waqarchatapp.appspot.com",
//     messagingSenderId: "676235345078"
// };
//  firebase.initializeApp(config);



// componentDidMount() {
//     super.componentDidMount();

//     this.onScrollNearBottom(this.scrollToLoad);

//     this.backListener = browserHistory.listen(location => {
//       if (location.action === "POP") {
//         // Do your stuff
//       }
//     });
//   }

// componentWillUnmount() {
//     super.componentWillUnmount();
//     // Unbind listener
//     this.backListener();
// }


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

    console.log(dataObject)
        }

        // componentDidMount() {
        //     super.componentDidMount();
        
        //     this.onScrollNearBottom(this.scrollToLoad);
        
        //     this.backListener = browserHistory.listen(location => {
        //       if (location.action === "POP") {
        //        console.log('pop')
        //       }
        //     });
        //   }

        //   componentWillUnmount() {
        //     super.componentWillUnmount();
        //     // Unbind listener
        //     this.backListener();
        // }

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
// assert.equal(reactHtml, htmlInput); // true
// console.log(assert.equal(reactHtml, htmlInput))
        // console.log( quill.getHTML())
        // console.log(this.props)
        // ReactQuill.getHTML()
        // console.log(firebase)
        window.onbeforeunload = function () {
            console.log('back press')

          }
          // const editor = CreatePOst.propTypes.getEditor()
          // console.log(editor)
          // const unprivilegedEditor = this.reactQuillRef.makeUnprivilegedEditor(editor);
          // You may now use the unprivilegedEditor proxy methods
          // unprivilegedEditor.getText();
          console.log(PropTypes)

        return (
            <div>
                 <Nav />
                 <div>{Parser(this.state.editorHtml)}</div>
{this.state.editorHtml}
<div style={style.mainDiv}>
                 <div class="form-group">
  <label for="usr">title:</label>
  <input type="text" className="form-control" id="usr" style={{width: '70%'}} onChange={this.handleChangetitle} />

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
              placeholder={'Write Something here '}
              style={{qlEditor : {
                minHeight: '18em'
              }}}
             />
            {/* <div className="themeSwitcher">
              <label>Theme </label>
              <select onChange={(e) => 
                  this.handleThemeChange(e.target.value)}>
                <option value="snow">Snow</option>
                <option value="bubble">Bubble</option>
                <option value="core">Core</option>
              </select>
            </div> */}
           </div>

     
      {/* <input  type="file" accept="image/*" /> */}
<br/>

<div>
        <form>
          {/* <label>Username:</label> */}
          {/* <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleChangeUsername}
        /> */}
          {/* <label>Avatar:</label> */}
          {/* {this.state.isUploading && <p>Progress: {this.state.progress}</p>} */}
          {this.state.isUploading && <ProgressBar striped bsStyle="info" now={40} />}
          {/* {this.state.avatarURL && <img src={this.state.avatarURL} />} */}
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
    }
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