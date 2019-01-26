import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinAction } from '../store/action/action';
import './Css/signup.css'
import history from '../History';
import Nav from './navBar'


class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '' , 
            selectUser : 'student'
        }


        this.signin = this.signin.bind(this);
        this._onChangeEmail = this._onChangeEmail.bind(this);
        this.dropDownSelector = this.dropDownSelector.bind(this);
        this._onChangePassword = this._onChangePassword.bind(this);

    }

    signin() {
        let user = {
            email: this.state.email,
            password: this.state.password ,
            // selectUser : this.state.selectUser
        }
        this.setState({
            email: '',
            password: ''
        })
        this.props.signinWithEmailPassword(user);
    }
    _onChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    _onChangePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    gotoSignUp() {
        history.push('/signup')
    }
    dropDownSelector(ev){
        console.log(ev.target.value)
        var user = ev.target.value
        this.setState({
            selectUser : user
        })
                console.log(this.state.selectUser)
        
        
            }
        
    render() {
        return (
            <div>
<Nav/>
                <div className="container">

                    <div className="row main">
                        <div className="main-login main-center">
                            <h5>Sign In</h5>
                            <form className="" method="post" action="#">


                                <div className="form-group">
                                    <label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                            <input type="text" onChange={this._onChangeEmail} className="form-control" name="email" id="email" placeholder="Enter your Email" />
                                        </div>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="password" className="cols-sm-2 control-label" >Password</label>
                                    <div className="cols-sm-10">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                            <input type="password" onChange={this._onChangePassword} className="form-control" name="password" id="password" placeholder="Enter your Password" />
                                        </div>
                                    </div>
                                </div>
                                {/* <select  style={{color:'black'}} onChange={this.dropDownSelector}>
                                    <option style={{color:'black'}}  value="student">student</option>
                                    <option style={{color:'black'}}  value="company">company</option>
                                    <option style={{color:'black'}}  value="company">Admin</option>

                                        
                                    </select> */}


                                <div className="form-group ">
                                    <a onClick={this.signin} style={{ color: 'black', backgroundColor: 'white' }} type="button" id="button" className="btn btn-primary btn-lg btn-block login-button">Sign In</a>
                                </div>

                                {/* <h6>Dont have account <a style={{color:'whiite'}} onClick={this.gotoSignUp}>SignUp here</a> </h6> */}

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
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
        signinWithEmailPassword: (user) => {
            dispatch(signinAction(user))
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Signin);

