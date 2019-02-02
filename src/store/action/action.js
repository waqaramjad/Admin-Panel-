import ActionTypes from '../constant/constant';
import history from '../../History';
import firebase from 'firebase';



var config = {
    apiKey: "AIzaSyDcyZcVQP8nuHcMJsKd5wHxoaerUW6apZQ",
    authDomain: "waqarchatapp.firebaseapp.com",
    databaseURL: "https://waqarchatapp.firebaseio.com",
    projectId: "waqarchatapp",
    storageBucket: "waqarchatapp.appspot.com",
    messagingSenderId: "676235345078"
};
firebase.initializeApp(config);



export function changeUserName() {
    return dispatch => {
        dispatch({ type: ActionTypes.USERNAME, payload: 'Ali' })
    }
}





export function signinAction(user) {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((signedinUser) => {
                console.log(signedinUser.uid)
                if (signedinUser.uid == 'xZYBYObkTvNIGlpDQUoCQFW0VK63') {

                    history.push('/Admin')

                }
                else {
                    firebase.database().ref('users/' + user.selectUser + '/' + signedinUser.uid).once('value')
                        .then((userData) => {
                            console.log(userData.val());
                            let userDataFromFirebase = userData.val()
                            let myData = {
                                email: userDataFromFirebase.email,
                                uid: userDataFromFirebase.uid,
                                userName: userDataFromFirebase.username

                            }
                            console.log(myData)
                            dispatch({ type: ActionTypes.CURRENTUSERDATA, payload: myData })




                            history.push('/' + user.selectUser)

                        })
                }
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
        firebase.database().ref('articles/').on('child_added', (data) => {
            let obj = data.val();

            console.log('objobjobjobj',obj);
            obj.id = data.key;
            // console.log(obj.id)
            // console.log(data.key)
            currentTodos = currentTodos.concat(obj);
            // console.log(POSTS)   
            
            // console.log(currentTodos,'currentTodoscurrentTodoscurrentTodos')
            dispatch({ type: ActionTypes.POSTS, payload: currentTodos })
        })
    }
}

export function deleteArticle(todoKey, index) {

    return dispatch => {
        firebase.database().ref('articles/' + todoKey).remove()
            .then((v) => {
                currentTodos = currentTodos.slice(0, index).concat(currentTodos.slice(index + 1));
                dispatch({ type: ActionTypes.POSTS, payload: currentTodos })
            });
    }
}

export function editTodo(todoObj, index) {

    console.log(todoObj )
    console.log(index )
    return dispatch => {
        // console.log(todoObj)
        let updateKey =todoObj.id;
        delete todoObj.id;
        firebase.database().ref('articles/' + index).update(todoObj)
        alert('Data Updated')
    }
}


export function postArticles(data) {
    return dispatch => {
        firebase.database().ref('/articles' ).push(data)
            .then((data) => {

                alert('Article Added')
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










