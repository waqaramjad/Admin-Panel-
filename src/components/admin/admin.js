import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import history from '../../History';
import Nav from '../navBar'

import {
    getDataByAdmin,
    renderArticles,
    deleteArticle
} from '../../store/action/action'
import {
    Panel,
    PanelGroup,
    Button,
    Image
} from 'react-bootstrap';

import {
    apps
} from 'firebase';

const style = {

    btnEdit: {
        float: 'right',
        marginTop: '-7px',
        marginLeft: '6px'
    },
    btnDel: {
        float: 'right',
        marginTop: '-7px',
    },
    addpostBtn: {
        marginLeft: '2%',
        marginBottom: '3%'
    },
    articleList: {
        marginLeft: '2%',
        marginRight: '20%',

    },

    caregoryLabel : {
        fontSize: '18px'
    }


}
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1 , 
            width : 'auto' ,
            marginTop : 0 , 
            

        }}
    />
);


var Sports = ''
class Admin extends Component {
    constructor(props) {

        super(props);

        this.state = {
            currendata: {},
            POSTS: [],
            statusForLoading: false , 
            Sports : undefined

        }

        this.CreatePost = this.CreatePost.bind(this)
        console.log('checki')
        console.log(this.props)
        console.log(this.props.POSTS)
        var checker = this.state.statusForLoading
        if(this.props.POSTS!= undefined){

            var myProps = this.props.POSTS['Sports']
            this.setState({
                Sports : myProps
            })
        }
        // this.props.renderArticles('checker');
        console.log(this.state.Sports)

    }

    CreatePost() {

        history.push('/CreatePost')

    }

    deleteArticle(UID , data ) {
        console.log(data)
        // console.log(id)
        console.log(UID )
        var category = data.category
        // console.log(this.props.todos[index],'index');
        this.props.deleteArticle(UID, category)

    }
 
    componentWillReceiveProps(data){
        if(data.POSTS['Sports']!=undefined){
            var Sports = data.POSTS['Sports']
            this.setState({
Sports: Sports
            })
        }
        else {
            this.setState({
                Sports: undefined
                            })
        }
console.log('data', data)
    }

    editArticle(uid, data) {

        // console.log(todo)
        // console.log(uid)
        var UID = uid
        var title = data.title
        var editorHtml = data.editorHtml
        console.log(uid)
        // console.log(index)
        // console.log(editorHtml)

        history.push({
            pathname: '/Edit',
            UID: uid,
          
            title: title,
            ArticleData: editorHtml,
            todo: data
        })

    }
    showPost(index, uid) {

        var UID = uid

        history.push({
            pathname: '/showPost',
            UID: uid,
            index: index,
            title: 'title',
            ArticleData: 'ArticleData'
        })

    }
    check1() {

    }

    componentWillMount() {
        console.log(this.props.location.status)

        if (this.props.location.status == true)
            this.setState({
                statusForLoading: true
            })
    }
    render() {

//         if(this.props.POSTS!=undefined){
// var obj= this.props.POSTS
// var Sp= obj['ChurchPlankoning']
// Sports = Sp
// console.log(Sports)
// console.log(Sp)
// // this.setState({
// //     Sports : Sports
// // })
// // this.state.Sports
// // console.log(this.state.Sports)
//         //     Object.keys(obj).map(function(key, index) {
//         //             console.log(obj['ChurchPlanning'])
//         //               console.log(key)
//         //               console.log(index)
//         //             });
//         }
        var a = this.state.statusForLoading
        console.log(this.props.POSTS)
        console.log(this.state.statusForLoading)
        console.log(this.props.location.status)
        if (this.state.statusForLoading === false && this.props.location.status == true) {
            this.setState({
                statusForLoading: true
            })
        }

        // if(this.props.POSTS!= '' && this.props.POSTS['Sports']!=undefined && this.state.Sports==undefined){

        //     console.log(this.props.POSTS['Sports'])
        //     var Sports1 =  this.props.POSTS['Sports']
        //     console.log(Sports1)
        //     // var myProps = this.props.POSTS['Sports']
        //     this.setState({
        //         Sports : Sports1
        //     })
        // }

        if (this.props.POSTS == '') {
            console.log('check')
            var obj= this.props.POSTS
var Sp = obj['ChurchPlankoning']
Sports = Sp
console.log(Sports)
console.log(Sp)

            this.props.renderArticles(false);

        }



        console.log(this.state)
        var myData;
        return ( <
            div >
            <
            Nav / >


            <
            button className = "btn btn-success btnHeight"
            style = {
                style.addpostBtn
            }
            type = "button"
            onClick = {
                this.CreatePost
            } > Add new Post < /button>

            <
            div style = {
                style.articleList
            } >
<label style={style.caregoryLabel}> Sports</label>
            <ColoredLine color="black" />
            <ol className = "list-group" > {
                  
                       
                // Object.keys(Sports).map((todos, index) => {
                //     console.log(todos)
                //  })

                    
                    this.state.Sports!=undefined ?   Object.keys(this.state.Sports).map((data, index) => {
                    //    var todos = this.state.Sports['data']
                    console.log(this.state.Sports[todos])
                    
                    var todos= this.state.Sports[data]
                    console.log(data)
                    
                     
                               return ( <
                        Panel bsStyle = "primary"
                        key = {
                            index
                        } >
                        <
                        Panel.Heading >
                        <
                        Panel.Title componentClass = "h3" >


                        {
                            todos.title
                        } <
                        Button bsStyle = "danger"
                        bsSize = "small"
                        style = {
                            style.btnDel
                        }
                        onClick = {
                            this.deleteArticle.bind(this,  data , todos)
                        } > Delete < /Button> <
                        Button bsStyle = "success"
                        bsSize = "small"
                        style = {
                            style.btnEdit
                        }
                        onClick = {
                            this.editArticle.bind(this,  data, todos)
                        } > Edit < /Button> <
                        Button bsStyle = "info"
                        bsSize = "small"
                        style = {
                            style.btnEdit
                        }
                        onClick = {
                            this.showPost.bind(this, index, todos)
                        } > View < /Button> <
                        /Panel.Title>

                        <
                        /Panel.Heading> <
                        Panel.Body > < Image src = {
                            todos.avatarURL
                        }
                        thumbnail style = {
                            {
                                height: '200px',
                                width: null
                            }
                        }
                        />;</Panel.Body >

                        <
                        /Panel>

                    )
                     }) : <label>No Data to Show</label>

                   
                
            }<
                /ol> 

            </div>



            </div>)
        }





    }



    function mapStateToProp(state) {
        return ({

            POSTS: state.root.POSTS

        })
    }

    function mapDispatchToProp(dispatch) {
        console.log('dispatch')
        return ({
            // changeUserName: ()=>{dispatch(changeUserName())}
            getDataFromStudent: (user) => {
                dispatch(getDataByAdmin(user))
            },
            renderArticles: (checker) => {
                dispatch(renderArticles(checker))
            },
            deleteArticle: (todoKey, index) => {
                dispatch(deleteArticle(todoKey, index))
            },

        })
    }

    // export default Company;
    export default connect(mapStateToProp, mapDispatchToProp)(Admin);