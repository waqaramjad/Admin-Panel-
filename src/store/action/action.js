import ActionTypes from '../constant/constant';
import history from '../../History';
import firebase from 'firebase';



var config = {
    apiKey: "AIzaSyBvPD_nMwTS8AZ2CPC65OyKu5s1XulUW_4",
    authDomain: "go-ministries-app.firebaseapp.com",
    databaseURL: "https://go-ministries-app.firebaseio.com",
    projectId: "go-ministries-app",
    storageBucket: "go-ministries-app.appspot.com",
    messagingSenderId: "110885403273"
};
firebase.initializeApp(config);



export function changeUserName() {
    return dispatch => {
        dispatch({ type: ActionTypes.USERNAME, payload: 'Ali' })
    }
}





export function signinAction(user) {
    return dispatch => {

        
        console.log(firebase.auth().currentUser)
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((signedinUser) => {
                console.log(signedinUser.uid)
                if (signedinUser.uid == 'EpUKCLwlrzeJZPNIXRXaTJ1zix53') {

                    history.push('/Admin')

                }
                else {
                   alert(' Login Fail : Wrong email or Password')
                }
            }).catch((err)=>{
                
                              alert(err.message)
                          })
    }

}


let currentTodos = [];
let POSTS = [];
export function renderArticles(params) {
    return dispatch => {

        // if({})
        console.log('params')
        console.log(params)
        if(params== true){
            currentTodos=[]
        }

        firebase.database().ref('articles/').on('value', (data) => {
            let dataObject  = data.val();
console.log('check render')

            dispatch({ type: ActionTypes.POSTS, payload: dataObject })
        })
    }
}

export function deleteArticle(UID, category ) {

    return dispatch => {

        console.log(UID)
        console.log(category)
        firebase.database().ref('articles/'+category+'/'+ UID).remove()
            .then((v) => {
                alert('Data Deleted')
                // currentTodos = currentTodos.slice(0, index).concat(currentTodos.slice(index + 1));
                // dispatch({ type: ActionTypes.POSTS, payload: currentTodos })
            });
    }
}

export function editTodo(todoObj, index , category , previous) {

    console.log(todoObj.category )
    var CurrentCategory = todoObj.category
    console.log(index )
    console.log(category )
    console.log(previous )
    return dispatch => {
        // console.log(todoObj)
        // let updateKey =todoObj.id;
        // delete todoObj.id;


        firebase.database().ref('/articles/'+category+'/' + index).update(todoObj).then((data)=>{
            
           history.push({
                pathname : '/Admin' , 
                UID : 'wiki test 1 ' , 
                index : 'index' , 
                reload : true 
    
            }) 
            
            // history.push('/Admin')
        })
if(CurrentCategory!=previous)
firebase.database().ref('/articles/'+previous+'/' + index).remove()
        alert('Data Updated')
    }
}


export function postArticles(data) {
    return dispatch => {
        var category = data.category
        // console.log(data)
        firebase.database().ref('/articles/'+category+'/' ).push(data)
            .then((data) => {

                history.push('/Admin')

            })
    }


}
export function getAddsDataBySt(data) {
    return dispatch => {
        console.log('getStudentDataByCompany')

        firebase.database().ref('users/Jobs').once('value')
            .then((data) => {

                console.log('action')
                console.log(data.val())
                let userData = data.val();

                dispatch({ type: ActionTypes.getAddsByCompany, payload: userData })





            })
    }
}
export function getDataByAdmin(data) {

    let studentData, TeacherData
    return dispatch => {
        console.log('getStudentDataByCompany')

        firebase.database().ref('users/student').once('value')
            .then((data) => {

                console.log('action')
                console.log(data.val())
                let userData = data.val();

                dispatch({ type: ActionTypes.getDataByAdmin, payload: userData })





            })
    }   
}


export function deleteHandler(data) {


    return dispatch => {

        console.log(data)

            ()

    }

}










