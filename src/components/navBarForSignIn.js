import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signinAction } from '../store/action/action';
// import './Css/signup.css'
import history from '../History';

class NavSign extends Component {
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
            
      {/* <li className="active" style={{float:'right'}}><a href="#">Home</a></li> */}
          </div>
        </nav>
      </div>)
  }





}
export default NavSign;
// export default connect(mapStateToProp, mapDispatchToProp)(student);