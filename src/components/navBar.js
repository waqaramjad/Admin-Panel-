import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signinAction } from '../store/action/action';
// import './Css/signup.css'
import history from '../History';
import { Route, Router ,Link,
  Redirect,} from 'react-router-dom';

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
              <li className="active"><Link to='/'>Sign Out</Link></li>
             

            </ul>
          </div>
        </nav>
      </div>)
  }





}
export default Nav;
// export default connect(mapStateToProp, mapDispatchToProp)(student);