import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import firebase from 'firebase'


const PrivateRoute = ({ component: Component,isAuthenticated, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuthenticated != undefined
        ? <Component {...props} />
        :  <Redirect to='/' />

    )} />);


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
        isAuthenticated: PropTypes.bool.isRequired,
         isLoading: PropTypes.bool.isRequired
      };
      
      export default connect(mapStateToProps)(PrivateRoute);
