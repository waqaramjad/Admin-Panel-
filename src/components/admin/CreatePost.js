import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signinAction } from '../store/action/action';
// import './Css/signup.css'
import history from '../../History';
import Nav from '../navBar'
import { postArticles } from '../../store/action/action'
import { apps } from 'firebase';
import { browserHistory } from 'react-router';

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