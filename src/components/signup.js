import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signupAction} from '../store/action/action';
import 'react-bootstrap';
import './Css/signup.css'
import history from '../History';
import Nav from './navBar'

class Signup extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            email: '',
            userName: '',
            password: '',
            organization : '',
            selectUser :'student'
        }


        this.signup = this.signup.bind(this);
        this._onChangeEmail = this._onChangeEmail.bind(this);
        this._onChangeUserName = this._onChangeUserName.bind(this);
        this._onChangePassword = this._onChangePassword.bind(this);
        this.dropDownSelector = this.dropDownSelector.bind(this);
        this.organization = this.organization.bind(this);

    }

    signup() {
        let user = {
            email: this.state.email,
            username: this.state.userName,
            password: this.state.password , 
            selectedUser : this.state.selectUser
        }

        let selectUser = this.state.selectUser
        console.log(selectUser)
        this.setState({
            email: '',
            userName: '',
            password: ''
        })
        this.props.signupwithEmailPassword(user , selectUser);
        // console.log(this.props)
    }
    _onChangeEmail(event){
        // // console.log(event.target.value)
        // console.log(this.state , 'odifjoig')

        this.setState({
            email:event.target.value
        })
    }
    _onChangeUserName(event){
        this.setState({
            userName:event.target.value
        })
    }
    organization(event){
        console.log(event.target.value)
        // event.target.value
    //     this.setState({
    //         userName:event.target.value
    //     })
    }
    _onChangePassword(event){
        // console.log(event.target.value , 'iufhgud')
        
        this.setState({
            password:event.target.value
        })
    }

    dropDownSelector(ev){
console.log(ev.target.value)
let user = ev.target.value
this.setState({
    selectUser : user
})
console.log(this.state.selectUser)


    }

    goTosignIn(){
        history.push('/')
    }

    render() {
        return (
            <div>

<Nav/>
<div className="container">
			<div className="row main">
				<div className="main-login main-center">
				<h5>Sign up</h5>
					<form className="" method="post" action="#">
						
						<div className="form-group">
							<label htmlFor="name" className="cols-sm-2 control-label">Your Name</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" onChange={this._onChangeUserName} className="form-control" name="name" id="name"  placeholder="Enter your Name"/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" onChange={this._onChangeEmail}  className="form-control" name="email" id="email"  placeholder="Enter your Email"/>
								</div>
							</div>
						</div>


						<div className="form-group">
							<label htmlFor="password" className="cols-sm-2 control-label" >Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" onChange={this._onChangePassword} className="form-control" name="password" id="password"  placeholder="Enter your Password"/>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="organization" className="cols-sm-2 control-label" >Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="text" onChange={this.organization} className="form-control" name="organization" id="organiztion"  placeholder="Enter your Password"/>
								</div>
							</div>
						</div>

                        <div className="form-group">
							<label htmlFor="password" className="cols-sm-2 control-label" >select  your organization</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<select style={{color:'black'}} onChange={this.dropDownSelector}>
                                    <option  style={{color:'black'}} value="student">student</option>
                                    <option  style={{color:'black'}}  value="company">company</option>

                                        
                                    </select>
                                    {/* <input type="password" onChange={this._onChangePassword} className="form-control" name="password" id="password"  placeholder="Enter your Password"/> */}
								</div>
							</div>
						</div>



						<div className="form-group ">
							<a onClick={this.signup} style={{color:'black' , backgroundColor:'white'}} type="button" id="button" className="btn btn-primary btn-lg btn-block login-button">Register</a>
						</div>
						<h6><a style={{color:'whiite'}}     onClick={this.goTosignIn}>SignIn</a></h6>
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
        signupwithEmailPassword: (userDetails)=>{
            dispatch(signupAction(userDetails));
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Signup);

