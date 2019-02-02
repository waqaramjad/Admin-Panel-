import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Signin from './components/signin';
import Admin from './components/admin/admin'
import CreatePost from './components/admin/CreatePost'
import EditPost from './components/admin/Edit'
import showPost from './components/admin/showPost'
 
import 'react-bootstrap';

import history from './History';

// export const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Signin} />
                    <Route exact path="/SignIn" component={Signin} />
                    <Route exact path="/Admin" component={Admin} />
                    <Route exact path="/CreatePost" component={CreatePost} />
                    <Route exact path="/Edit" component={EditPost} />
                    <Route exact path="/showPost" component={showPost} />
                    
                    
                </div>
            </Router>
        )
    }
}

export default Routers;