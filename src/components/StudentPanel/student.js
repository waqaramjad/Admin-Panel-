import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signinAction } from '../store/action/action';
// import './Css/signup.css'
import './studentCss.css'
import 'react-bootstrap';
import Nav from '../navBar'
import { sendStudentData } from '../../store/action/action'


import history from '../../History';

class student extends Component {
    constructor(props) {

        super(props);

        this.state = {
            name: '',
            fatherName: '',
            email: '',
            contactNumber: '',
            adress: '',
            university: '',
            semester: '',
            gpa: 0,
            intrestedField: ''
        }
        this.name = this.name.bind(this)
        this.fatherName = this.fatherName.bind(this)
        this.email = this.email.bind(this)
        this.contactNumber = this.contactNumber.bind(this)
        this.university = this.university.bind(this)
        this.semester = this.semester.bind(this)
        this.gpa = this.gpa.bind(this)
        this.intrestedField = this.intrestedField.bind(this)
        this.sendData = this.sendData.bind(this)
        // this.home = this.home.bind(this)
        // this.jobs = this.jobs.bind(this)


    }

    sendData(event) {
        event.preventDefault()
        let uid = this.props.userDataInSignUp.currentUserData.uid
        console.log()   

        console.log('uid', uid)

        let studentData = {
            name: this.state.name,
            email: this.state.email,
            university: this.state.university,
            gpa: this.state.gpa , 
            userUid : uid 




        }

        this.props.sendStudentDataToForm(studentData)
        // console.log(this.props.userDataInSignUp)
    }
Jobs(ev){

    history.push('/JobsSt')
}
    name(ev) {
        console.log(ev.target.value)
        let value = ev.target.value
        this.setState({
            name: value
        })
    }
    fatherName(ev) {
        console.log(ev.target.value)
        let value = ev.target.value
        this.setState({
            fatherName: value
        })
    }
    email(ev) {
        console.log(ev.target.value)
        let value = ev.target.value
        this.setState({
            email: value
        })
    }
    contactNumber(ev) {
        console.log(ev.target.value)
        let value = ev.target.value
        this.setState({
            contactNumber: value
        })
    }
    adress(ev) {
        console.log(ev.target.value)
        let value = ev.target.value
        this.setState({
            adress: value
        })
    }
    university(ev) {
        console.log(ev.target.value)
        let value = ev.target.value
        this.setState({
            university: value
        })
    }
    semester(ev) {
        console.log(ev.target.value)
        let value = ev.target.value
        this.setState({
            semester: value
        })
    }
    gpa(ev) {
        console.log(ev.target.value)
        let value = ev.target.value
        this.setState({
            gpa: value
        })
    }
    intrestedField(ev) {
        console.log(ev.target.value)
        let value = ev.target.value
        this.setState({
            intrestedField: value
        })
    
    
    }


    home(ev){

    }
    // name(ev){
    //     console.log( ev.target.value)
    //     let value = ev.target.value
    //     this.setState({
    //          : value
    //     })
    // }

    render() {
        return (
            <div>
                <Nav />

                <input type='button' value='home' />
                <input type='button' value='see jobs' onClick={this.Jobs}/>
                {/* <input type='button'/> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form_main">
                                <h4 className="heading"><strong>Student </strong> Registration <span></span></h4>
                                <div className="form">
                                    <form id="contactFrm" name="contactFrm">
                                        <input type="text" onChange={this.name} required="" placeholder="Please input your Name" name="name" className="txt" />
                                        <input type="text" onChange={this.contactNumber} required="" placeholder="Please input your mobile No" name="mob" className="txt" />
                                        <input type="text" onChange={this.email} required="" placeholder="Please input your Email" name="email" className="txt" />
                                        <input type="text" onChange={this.adress} required="" placeholder="adress" name="adress" className="txt" />
                                        <input type="text" onChange={this.university} required="" placeholder="university" name="university" className="txt" />
                                        <input type="number" onChange={this.semester} required="" placeholder="semester" name="semester" className="txt" />
                                        <input type="number" onChange={this.gpa} required="" placeholder="gpa" name="gpa" className="txt" />
                                        <input type="text" onChange={this.intrestedField} required="" placeholder="intrestedField" name="intrestedField" className="txt" />

                                        <textarea placeholder="Your Message" name="mess" type="text" className="txt_3"></textarea>
                                        <input type="submit" value="submit" onClick={this.sendData} name="submit" className="txt2" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


function mapStateToProp(state) {
    return ({
        userDataInSignUp: state.root
    })
}

function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        sendStudentDataToForm: (user) => {
            dispatch(sendStudentData(user))
        }
    })
}








// export default student;
export default connect(mapStateToProp, mapDispatchToProp)(student);