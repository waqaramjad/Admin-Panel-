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


}

class Admin extends Component {
    constructor(props) {

        super(props);

        this.state = {
            currendata: {},
            POSTS: [],
            statusForLoading: false

        }

        this.CreatePost = this.CreatePost.bind(this)
        console.log('checki')
        console.log(this.props)
        console.log(this.props.POSTS)
        var checker = this.state.statusForLoading
        // this.props.renderArticles('checker');

    }

    CreatePost() {

        history.push('/CreatePost')

    }

    deleteArticle(index) {
        console.log(index)
        // console.log(this.props.todos[index],'index');
        this.props.deleteArticle(this.props.POSTS[index].id, index)

    }


    editArticle(index, uid, todo) {

        console.log(todo.title)
        console.log(uid)
        var UID = uid
        var title = todo.title
        var editorHtml = todo.editorHtml
        console.log(title)
        console.log(editorHtml)

        history.push({
            pathname: '/Edit',
            UID: uid,
            index: index,
            title: title,
            ArticleData: editorHtml,
            todo: todo
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

        var a = this.state.statusForLoading
        console.log(this.props)
        console.log(this.state.statusForLoading)
        console.log(this.props.location.status)
        if (this.state.statusForLoading === false && this.props.location.status == true) {
            this.setState({
                statusForLoading: true
            })
        }

        if (this.props.POSTS == '') {
            console.log('check')
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


            <
            ol className = "list-group" > {
                this.props.POSTS.map((todos, index) => {
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
                            this.deleteArticle.bind(this, index, )
                        } > Delete < /Button> <
                        Button bsStyle = "success"
                        bsSize = "small"
                        style = {
                            style.btnEdit
                        }
                        onClick = {
                            this.editArticle.bind(this, index, todos.id, todos)
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
                })
            } <
            /ol> <
            /div>



            <
            /div>)
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