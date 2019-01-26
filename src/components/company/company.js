import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signinAction } from '../store/action/action';
// import './Css/signup.css'
import history from '../../History';
import Nav from '../navBar'
import { getStudentDataByCompany } from '../../store/action/action'
import { apps } from 'firebase';

class Company extends Component {
    constructor(props) {

        super(props);

        this.state = {
            currendata: {}

        }

        this.getData = this.getData.bind(this)
        this.getData1 = this.getData1.bind(this)
                this.home = this.home.bind(this)
        this.Job = this.Job.bind(this)

   
    }
    componentWillMount() {
        var a = 'dffd'
        // console.log('getData')
        this.props.getDataFromStudent(a)


    }

    componentWillReceiveProps(props) {
        console.log(props.studentData)
        let myData = props.studentData

        this.setState({
            currendata: myData
        })

    }
Job(ev){
history.push('/Add')
}

home(ev){


}


    getData(ev) {

        // this.props.getDataFromStudent
        var a = 'dffd'
        console.log('getData')
        console.log(this.props.getDataFromStudent(a))
        // console.log('this.props.getDataFromStudent',this.props.getDataFromStudent())

        console.log(this.props.studentData)
    }
    getData1(ev) {

        console.log(this.props.studentData)
        let studentData = this.props.studentData

        Object.keys(studentData).map(function (key, index) {
            return (
                <div className="container">
                    <h2>{studentData[key].name}</h2>
                    <div className="list-group">

                        <h6 className="list-group-item active">{studentData[key].gpa}</h6>
                        {/* <a href="#" className="list-group-item active">First item</a>
                    <a href="#" className="list-group-item">Second item</a>
                    <a href="#" className="list-group-item">Third item</a> */}
                    </div>
                </div>
            )
            //    console.log(studentData[key].email)
        })

    }

    render() {
        console.log(this.state.currendata)
        // var  studentData = this.props.studentData
        var myData;
        var studentData = this.state.currendata

        return (
            <div>
                 <Nav />

                 <input type='button' value='home' onClick={this.home}/>
                <input type='button' value='post jobs' onClick={this.Job}/>

                {

                    Object.keys(studentData).map(function (key, index) {


                        //    console.log(studentData[key].email)

                        return (

                            <div key={index} className="container">
                                <h2 className="list-group-item active">name : {studentData[key].name}</h2>
                                <div className="list-group">

                                    <h6 className="list-group-item">Gpa :{studentData[key].gpa}</h6>
                                    <h6 className="list-group-item">Univesity :{studentData[key].university}</h6>
                                    <h6 className="list-group-item">email :{studentData[key].email}</h6>
                                    {/* <h6 className="list-group-item">{studentData[key].gpa}</h6> */}
                                    {/* <a href="#" className="list-group-item active">First item</a>
    <a href="#" className="list-group-item">Second item</a>
    <a href="#" className="list-group-item">Third item</a> */}
                                </div>
                            </div>

                        )

                    })


                }

               
                 {/* <input type='button' value='getData' onClick={this.getData} />
                <input type='button' value='getData1' onClick={this.getData1} /> */}
                {/* <button onClick={this.getData}>get</button> */}
               
            </div>)
    }





}



function mapStateToProp(state) {
    return ({
        studentData: state.root.getStudentDataByCompany
    })
}

function mapDispatchToProp(dispatch) {
    console.log('dispatch')
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        getDataFromStudent: (user) => {
            dispatch(getStudentDataByCompany(user))
        }
    })
}

// export default Company;
export default connect(mapStateToProp, mapDispatchToProp)(Company);