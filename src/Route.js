import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/home';
import Signup from './components/signup';
import Signin from './components/signin';
import student from './components/StudentPanel/student'
import JobsSt from './components/StudentPanel/JobsToStudent'
import Company from './components/company/company'
// import JobsSt from './components/company/company'
import Admin from './components/admin/admin'
import Add from './components/company/postingAdd'
import CreatePost from './components/admin/CreatePost'
import EditPost from './components/admin/Edit'
import Editor from './components/admin/checkingForEditor'
import showPost from './components/admin/showPost'
 
import 'react-bootstrap';

import history from './History';

// export const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/" component={Signin} />
                    <Route exact path="/student" component={student} />
                    <Route exact path="/company" component={Company} />
                    <Route exact path="/Admin" component={Admin} />
                    <Route exact path="/Add" component={Add} />
                    <Route exact path="/JobsSt" component={JobsSt} />
                    <Route exact path="/CreatePost" component={CreatePost} />
                    <Route exact path="/Edit" component={EditPost} />
                    <Route exact path="/MyComponent" component={Editor} />
                    <Route exact path="/showPost" component={showPost} />
                    
                    
                </div>
            </Router>
        )
    }
}

export default Routers;