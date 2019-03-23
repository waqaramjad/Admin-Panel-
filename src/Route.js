import React, { Component } from 'react';
import { Route, Router ,Link,
    Redirect,} from 'react-router-dom';
    import { connect } from "react-redux";

import Signin from './components/signin';
import Admin from './components/admin/admin'
import CreatePost from './components/admin/CreatePost'
import EditPost from './components/admin/Edit'
import showPost from './components/admin/showPost'
// import PrivateRoute from './components/admin/PrivateRoute'
 import firebase from 'firebase'
 import PropTypes from "prop-types";
// import firebase from 'firebase'

import 'react-bootstrap';

import history from './History';

// export const history = createBrowserHistory()

// const fakeAuth = {
//     isAuthenticated: false,
//     authenticate(cb) {
//       this.isAuthenticated = true
//       setTimeout(cb, 100)
//     },
//     signout(cb) {
//       this.isAuthenticated = false
//       setTimeout(cb, 100)
//     }
//   }
  
const PrivateRoute = ({ component: Component,isAuthenticated, ...rest }) => (
    <Route {...rest} render={(props) => {

console.log(isAuthenticated)
console.log(props)

      return  (
        isAuthenticated != undefined
        ? <Component {...props} />
        :  <Redirect to='/' />
    
    )
    }
        

} />);

class Routers extends Component {
    render() {
       
        console.log( this.props)
        var isAuthenticated = this.props.isAuthenticated
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Signin} />
                    <Route exact path="/SignIn" component={Signin} />
                    {/* <Route exact path="/Admin" component={Admin} /> */}
                    <PrivateRoute exact path="/CreatePost" component={CreatePost} />
                    <PrivateRoute exact path="/Edit" component={EditPost} />
                    <PrivateRoute exact path="/showPost" component={showPost} />
                    <PrivateRoute path='/Admin' component={Admin} isAuthenticated={isAuthenticated}/>
                    
                    
                </div>
            </Router>
        )
    }
}

const mapStateToProps = state => {

    console.log(state)
    return(


        {
    isAuthenticated: state.root.Authenticated,
    // isLoading: state.user.isLoading
   }

    )

}

  
  PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
    // isAuthenticated: PropTypes.bool.isRequired,
    //  isLoading: PropTypes.bool.isRequired
  };

// export default Routers;
export default connect(mapStateToProps)(Routers);
