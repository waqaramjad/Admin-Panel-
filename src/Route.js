import React, { Component } from 'react';
import { Route, Router ,Link,
    Redirect,} from 'react-router-dom';
import Signin from './components/signin';
import Admin from './components/admin/admin'
import CreatePost from './components/admin/CreatePost'
import EditPost from './components/admin/Edit'
import showPost from './components/admin/showPost'
 import firebase from 'firebase'
import 'react-bootstrap';

import history from './History';

// export const history = createBrowserHistory()

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }
  
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      firebase.auth().currentUser != null
        ? <Component {...props} />
        :  <Redirect to='/' />

    )} />);

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Signin} />
                    <Route exact path="/SignIn" component={Signin} />
                    {/* <Route exact path="/Admin" component={Admin} /> */}
                    <PrivateRoute exact path="/CreatePost" component={CreatePost} />
                    <PrivateRoute exact path="/Edit" component={EditPost} />
                    <PrivateRoute exact path="/showPost" component={showPost} />
                    <PrivateRoute path='/Admin' component={Admin} />
                    
                    
                </div>
            </Router>
        )
    }
}

export default Routers;