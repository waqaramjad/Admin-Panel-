import Parser from 'html-react-parser';

import React, { Component } from 'react';

import { connect } from 'react-redux';
// import { signinAction } from '../store/action/action';
// import './Css/signup.css'
import history from '../../History';
import Nav from '../navBar'
import { editTodo } from '../../store/action/action'
import { apps } from 'firebase';
var ReactDOMServer = require('react-dom/server');
var HtmlToReactParser = require('html-to-react').Parser;

var style = {
    mainDiv : {
        marginLeft : '10%' , 
        marginRight : '10%'

    } , 

    Label  : {
        marginTop : '1%' , 
        marginBottom : '1%' , 
        fontSize : '25px'
        
    }
}


class ShowPost extends Component {
    constructor(props) {

        super(props);

        this.state = {
            textArea : '' , 
            title : ''

        }


        this.handleChange = this.handleChange.bind(this)
        this.handleChangetitle = this.handleChangetitle.bind(this)
        this.pushData = this.pushData.bind(this)

   
    }
    

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
    // var title = this.state.title
    var textArea = this.state.textArea

    // var dataObject = {
    //     title , 
    //     textArea
    // }
    // var UID = this.props.location.UID
    // var editorHtml = this.props.location.UID.editorHtml
    // var title = this.props.location.UID.title
    // this.props.editTodo(dataObject , UID)

    // console.log(dataObject)
        }


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
var myTitle = this.props.location.UID.title 
var editorHtml = this.props.location.UID.editorHtml 
console.log(editorHtml)
var postData = this.props.location.ArticleData 

if(this.state.textArea==''&& this.state.title=='')
this.setState({
    title : myTitle , 
    textArea : postData
})



        // console.log(a)

        return (
                 
            <div >
                <Nav />
            <div style={style.mainDiv}>

                {/* {a} */}
                 

                 {/* <div style={style.mainDiv}> */}

                 <label for="usr" style={style.Label}>Title :  {myTitle} </label><br/>
                 
{Parser(editorHtml)}


{/* </div> */}
               
            </div>
            </div>
            )
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
        editTodo: (data , index ) => {
            dispatch(editTodo(data , index))
        }
    })
}

// export default Company;
export default connect(mapStateToProp, mapDispatchToProp)(ShowPost);