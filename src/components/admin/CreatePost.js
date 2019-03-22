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
import { Panel , ButtonToolbar , PanelGroup ,ProgressBar,  Button , Modal , DropdownButton , MenuItem } from 'react-bootstrap';
import ReactQuill from 'react-quill'; // ES6
import '../Css/check.css'
import PropTypes from 'prop-types'
// import { Resize, BaseModule } from 'quill-image-resize-module';
var ReactDOMServer = require('react-dom/server');
var HtmlToReactParser = require('html-to-react').Parser;

const BUTTONS = ['Primary'];
var CurrentDate = new Date()

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
    editorHtml : '',  theme: 'snow' , check:'' , category :'No Category Selected' , 
date1 : ''  , author  : ''  

        }


        this.handleChange = this.handleChange.bind(this)
        this.handleChangetitle = this.handleChangetitle.bind(this)
        this.handleChangeAuthor = this.handleChangeAuthor.bind(this)
        this.pushData = this.pushData.bind(this)
        this.onSelect = this.onSelect.bind(this)
        this.renderDropdownButton = this.renderDropdownButton.bind(this)

   
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
handleChangeAuthor(event){
this.setState({
    author : event.target.value
})

console.log(this.state.author)
}
pushData(){
    
    console.log('this.state.value')
    var title = this.state.title
    var editorHtml = this.state.editorHtml
    var avatar = this.state.avatar
    var avatarURL = this.state.avatarURL
    var category = this.state.category
    var author = this.state.author
    // console.log(myDate.getDate())
    var CurrentDate = new Date()

    var date = CurrentDate.getTime()
    console.log(date)
    // this.setState({
    //   date1 : date
    // })
// console.log(this.state.date1)
    var dataObject = {
        title , 
        
        avatar , 
        avatarURL ,
        editorHtml , 
        category ,
        date , author

        
    }
    if(category==''){
      alert('Please Select Category first ..')
    }

    else if (title=='' | editorHtml=='' | avatarURL=='' | avatar=='' |author==''){

      alert('Fill all fields including  title  , article ,author ,  Thumbnail image')

    }

    
    else{

      this.props.postArticles(dataObject)
  this.setState({
    title : '', 
          
          avatar :'', 
          avatarURL :'',
          editorHtml:'' ,
          author : ''
          
          
  })

    }
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


    render() {
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
              <ButtonToolbar>{BUTTONS.map(this.renderDropdownButton)}</ButtonToolbar>
<br/>
{/* <br/> */}
           <div style={{marginBottom : '.3%'}}>
             <h3 style={{display:'inline' , fontSize:'16px', fontWeight : 700}}>Category </h3><h5 style={{display:'inline',fontSize:'15px'}}> : {this.state.category}</h5></div>

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