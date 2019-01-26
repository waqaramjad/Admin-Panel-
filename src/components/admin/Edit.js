import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signinAction } from '../store/action/action';
// import './Css/signup.css'
import history from '../../History';
import Nav from '../navBar'
import { editTodo } from '../../store/action/action'
import { apps } from 'firebase';

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
    var title = this.state.title
    var textArea = this.state.textArea

    var dataObject = {
        title , 
        textArea
    }
    var UID = this.props.location.UID
    this.props.editTodo(dataObject , UID)

    console.log(dataObject)
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
        console.log(this.props.location.UID)
var myTitle = this.props.location.title 
var postData = this.props.location.ArticleData 

if(this.state.textArea==''&& this.state.title=='')
this.setState({
    title : myTitle , 
    textArea : postData
})

        

        return (
            <div>
                 <Nav />

                 <div style={style.mainDiv}>


                 <div class="form-group">
  <label for="usr" style={style.Label}>title:</label>
  <input type="text" className="form-control" id="usr" style={{width: '70%'}} onChange={this.handleChangetitle} />
</div>

<label for="usr" style={style.Label}>Article:</label><br/>
                 <textarea name="body"
          onChange={this.handleChange}
          style={{height: 250 , width : '70%'}}
          />

     
      <input  type="file" accept="image/*" />
      {/* <input type="file" className="btn btn-primary btn-choose" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"></input> */}
<br/>
<button className="btn btn-primary btnHeight" type="button" onClick={this.pushData} >Update </button>
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
        editTodo: (data , index ) => {
            dispatch(editTodo(data , index))
        }
    })
}

// export default Company;
export default connect(mapStateToProp, mapDispatchToProp)(EditPost);