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
    

    handleChangeUsername = event =>
    this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
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

    var dataObject = {
        title , 
        textArea
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
            //   if(this._isMounted) {
            //     const { hash } = location;
            //     if(hash.indexOf('home')>-1 && this.state.value!==0)
            //       this.setState({value: 0})
            //     if(hash.indexOf('users')>-1 && this.state.value!==1)
            //       this.setState({value: 1})
            //     if(hash.indexOf('data')>-1 && this.state.value!==2)
            //       this.setState({value: 2})
            //   }
 history.push({
           
            UID : 'wiki test 1 ' , 
            index : 'index' , 
            status : true 
            
          })
              console.log('check')
            }
          }

             
              


    render() {
        console.log(this.state.currendata)
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

     
      <input  type="file" accept="image/*" />
<br/>
<button className="btn btn-primary btnHeight" type="button" onClick={this.pushData} >Post </button>

<div>
        <form>
          <label>Username:</label>
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleChangeUsername}
          />
          <label>Avatar:</label>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <img src={this.state.avatarURL} />}
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </form>
      </div>

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