import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signinAction } from '../store/action/action';
// import './Css/signup.css'
import history from '../../History';
import Nav from '../navBar'

import { getDataByAdmin , renderArticles , deleteArticle } from '../../store/action/action'
import { Panel , PanelGroup , Button , Image } from 'react-bootstrap';

import { apps } from 'firebase';

const  style = {

    btnEdit  : {
        float:'right' , marginTop:'-7px' , marginLeft : '6px'
    } , 
    btnDel  : {
        float:'right' , marginTop:'-7px' ,
    } , 
    addpostBtn : {
        marginLeft : '2%' ,
        marginBottom : '3%'
    } , 
    articleList : {
        marginLeft : '2%' , 
        marginRight : '20%', 

    } , 


} 

class Admin extends Component {
    constructor(props) {

        super(props);

        this.state = {
            currendata: {} , 
            POSTS: [] , 
            statusForLoading : false 

        }

        // this.getData = this.getData.bind(this)
        // this.getData1 = this.getData1.bind(this)
        //         this.home = this.home.bind(this)
        // this.Job = this.Job.bind(this)
        // this.delete = this.delete.bind(this)
        this.CreatePost = this.CreatePost.bind(this)
console.log('checki')
console.log(this.props)
console.log(this.props.POSTS)
var checker = this.state.statusForLoading
        // this.props.renderArticles('checker');
   
    }

    CreatePost(){

        history.push('/CreatePost')

    }

    deleteArticle(index) {
        console.log(index)
        // console.log(this.props.todos[index],'index');
        this.props.deleteArticle(this.props.POSTS[index].id,index)
       
      }


      editArticle(index , uid , todo){
         
        console.log(todo)
        console.log(uid)
          var UID = uid

          history.push({
            pathname: '/Edit',
            UID : uid , 
            index : index , 
            title : 'title' , 
            ArticleData : 'ArticleData' , 
            todo : todo
          })
      
    }
      showPost(index , uid){
         
          var UID = uid

          history.push({
            pathname: '/showPost',
            UID : uid , 
            index : index , 
            title : 'title' , 
            ArticleData : 'ArticleData'
          })
      
    }
    
componentWillMount(){
        console.log(this.props.location.status)

    if(this.props.location.status == true)
    this.setState({
statusForLoading : true
    })
}
    render() {

        var a = this.state.statusForLoading
        console.log(this.props)
        console.log(this.state.statusForLoading)
        console.log(this.props.location.status)
        if(this.state.statusForLoading === false && this.props.location.status == true )
        {
            this.setState({
                statusForLoading : true
            })
        }

        if (this.props.POSTS == ''){
            console.log('check')
             this.props.renderArticles(false);
        }

        //  if(a== true){
        //     console.log('check')
        //     this.props.renderArticles(true);
        // }


        console.log(this.state)
        // if()
        // var  studentData = this.props.studentData
        var myData;
        // var studentData = this.state.currendata
        // var JObs = studentData.JObs
        // console.log(JObs)
        // var Jobs = studentData.Jobs
        return (
            <div>
                 <Nav />

               
                 <button className="btn btn-success btnHeight" style={style.addpostBtn} type="button" onClick={this.CreatePost} >Add new Post </button>

<div style={style.articleList}>


                 <ol className="list-group">
            {
              this.props.POSTS.map((todos, index) => {
                return (
                    <Panel bsStyle="primary" key={index}>
    <Panel.Heading>
      <Panel.Title   componentClass="h3"> 

      {/* <Button bsStyle="primary" onClick={this.showPost.bind(this, index , todos)}></Button> */}
      
      {todos.title}
      {/* <button type="button" style={{float:"right"}} onClick={this.CreatePost} >Delete </button> */}
      {/* <div> */}

      {/* </div> */}
      <Button bsStyle="info" bsSize="small" style={style.btnEdit} onClick={this.showPost.bind(this, index , todos)}>View</Button>
      <Button bsStyle="success" bsSize="small" style={style.btnEdit} onClick={this.editArticle.bind(this, index , todos.id , todos)}>Edit</Button>
      <Button bsStyle="danger" bsSize="small" style={style.btnDel} onClick={this.deleteArticle.bind(this, index , )}>Delete</Button>
      </Panel.Title>

    </Panel.Heading>
    {/* <Panel.Body> {todos.textArea}</Panel.Body> */}
    <Panel.Body> <Image src={todos.avatarURL} thumbnail style={{height: '200px' , width: null}} />;</Panel.Body>

  </Panel>
                  
  )
              })
            }
          </ol>
</div>

          

                 {/* <input type='button' value='home' onClick={this.home}/> */}
                {/* <input type='button' value='post jobs' onClick={this.Job}/> */}

                {

    //                 Object.keys(studentData).map(function (key, index) {


    //                     //    console.log(studentData[key].email)

    //                     return (

    //                         <div key={index} className="container">
    //                             <h2 className="list-group-item active">name : {studentData[key].username}</h2>
    //                             <div className="list-group">
                            
    //                             {/* <h6 className="list-group-item">Gpa :{studentData[key].gpa}</h6> */}
    //                             <h6 className="list-group-item">User Type :{studentData[key].selectedUser}</h6>
    //                             <h6 className="list-group-item">email :{studentData[key].email}</h6>
                               
    //                             {/* <h6 className="list-group-item">{studentData[key].gpa}</h6> */}
    //                                 {/* <a href="#" className="list-group-item active">First item</a>
    // <a href="#" className="list-group-item">Second item</a>
    // <a href="#" className="list-group-item">Third item</a> */}
    //                             </div>
    //                         </div>

    //                     )

    //                 })


                }

               
                 {/* <input type='button' value='getData' onClick={this.getData} />
                <input type='button' value='getData1' onClick={this.getData1} /> */}
                {/* <button onClick={this.getData}>get</button> */}
               
            </div>)
    }





}



function mapStateToProp(state) {
    return ({
        
        POSTS: state.root.POSTS

    })  
}

function mapDispatchToProp(dispatch) {
    console.log('dispatch')
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        getDataFromStudent: (user) => {
            dispatch(getDataByAdmin(user))
        } , 
        renderArticles: (checker) => {
            dispatch(renderArticles(checker))
        } , 
        deleteArticle: (todoKey,index)=>{dispatch(deleteArticle(todoKey,index))},

    })
}

// export default Company;
export default connect(mapStateToProp, mapDispatchToProp)(Admin);