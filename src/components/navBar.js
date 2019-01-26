import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signinAction } from '../store/action/action';
// import './Css/signup.css'
import history from '../History';

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
              <li className="active"><a href="#">Home</a></li>
              <li className="active"><a href="#">Create Post</a></li>
              {/* <li><a href="#">Page 1</a></li> */}
      {/* <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>  */}
             

            </ul>
            <ul className="nav navbar-nav" style={{float:'right'}}>
              <li className="active"><a href="#">Sign Out </a></li>
              {/* <li><a href="#">Page 1</a></li> */}
      {/* <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>  */}
             

            </ul>
      {/* <li className="active" style={{float:'right'}}><a href="#">Home</a></li> */}
          </div>
        </nav>
      </div>)
  }





}
export default Nav;
// export default connect(mapStateToProp, mapDispatchToProp)(student);