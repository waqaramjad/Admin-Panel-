import Parser from 'html-react-parser';

import React, { Component } from 'react';

import { connect } from 'react-redux';
// import { signinAction } from '../store/action/action';
// import './Css/signup.css'
import history from '../../History';
import Nav from '../navBar'
import { editTodo } from '../../store/action/action'
import { apps } from 'firebase';
import { Panel , PanelGroup , Button , Image } from 'react-bootstrap';

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
                <Panel bsStyle="primary" >
    <Panel.Heading>
      <Panel.Title   componentClass="h3"> 

      {/* <Button bsStyle="primary" onClick={this.showPost.bind(this, index , todos)}></Button> */}
      
     Title :  {myTitle}
      </Panel.Title>

    </Panel.Heading>
    {/* <Panel.Body> {todos.textArea}</Panel.Body> */}
    <Panel.Body> 
    {Parser(editorHtml)}
    </Panel.Body>

  </Panel>

                 



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
        editTodo: (data , index ) => {
            dispatch(editTodo(data , index))
        }
    })
}

// export default Company;
export default connect(mapStateToProp, mapDispatchToProp)(ShowPost);