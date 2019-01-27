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
    avatarURL: ""

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
 

    handleChange(event){
this.setState({
    textArea : event.target.value
})

console.log(this.state.textArea)
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
    var textArea = this.state.textArea
    var avatar = this.state.avatar
    var avatarURL = this.state.avatarURL
    var dataObject = {
        title , 
        textArea ,
        avatar , 
        avatarURL

        
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
        console.log(this.state)
        console.log(this.props)

        console.log(firebase)
        window.onbeforeunload = function () {
            console.log('back press')
         }

        return (
            <div>
                 <Nav />

<div style={style.mainDiv}>
                 <div class="form-group">
  <label for="usr">title:</label>
  <input type="text" className="form-control" id="usr" style={{width: '70%'}} onChange={this.handleChangetitle} />
</div>
                 <textarea name="body"
          onChange={this.handleChange}
          style={{height: 250 , width : '70%'}}
          />

     
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