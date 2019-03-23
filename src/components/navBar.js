import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signinAction } from '../store/action/action';
// import './Css/signup.css'
import history from '../History';
import { Route, Router ,Link,
  Redirect,} from 'react-router-dom';
  import {SignOut} from '../store/action/action'

class Nav extends Component {
  constructor(props) {

    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a style={{ color: 'white' }} className="navbar-brand" >Admin Panel </a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><Link to='/Admin'>Home</Link></li>
              <li className="active"><Link to='/CreatePost'>Create Post</Link></li>
              
             

            </ul>
            <ul className="nav navbar-nav" style={{float:'right'}}>
              {/* <li className="active" ><a onClick={()=>{console.log(this.props.SignOut())}}>Sign Out</a></li> */}
              <li className="active" ><a onClick={()=>{this.props.SignOut()}}>Sign Out</a></li>
             

            </ul>
          </div>
        </nav>
      </div>)
  }





}
function mapStateToProp(state) {
  return ({
      // userName: state.root.userName
  })
}


function mapDispatchToProp(dispatch) {
  return ({
      // changeUserName: ()=>{dispatch(changeUserName())}
      SignOut: () => {
          dispatch(SignOut())
      }
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(Nav);

// export default Nav;
// export default connect(mapStateToProp, mapDispatchToProp)(student);