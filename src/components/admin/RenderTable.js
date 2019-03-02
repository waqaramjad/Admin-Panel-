import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import history from '../../History';
import {
    Panel,
    PanelGroup,
    Button,
    Image,
    Table
} from 'react-bootstrap';
import '../Css/admin.css'
// import style from '../Css/tableStyle'


const style = {

    btnEdit: {
        // float: 'right',
        marginTop: '-7px',
        marginLeft: '6px'
    },
    btnDel: {
        // float: 'right',
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

var SortArr = []
export default class RenderTable extends Component {
    constructor(props) {

        super(props);

        this.state = {
name : '' , 
TableData : ' '
        }
         this.sort = this.sort.bind(this)
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
    componentWillReceiveProps(props){
        console.log('props')
        console.log(props)
        // var name = props.name
// this.setState({

    // })
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
    sort(){
        var sortData = this.state.data
        var sortObject = {}
        var sortArrReverse = SortArr.reverse()
        sortArrReverse.map((data , index )=>{


    var dummData = sortData[data]
    sortObject[data] = dummData

        })
this.setState({
    data :  sortObject
})


    }

    componentWillReceiveProps(props){
console.log(props)
var data = props.data
this.setState({
data : data
})

    }
    render() {
        console.log('props')
        console.log(this.props)

        return (


            
            <div >
            
            <label style = {
                style.caregoryLabel
            } > {this.props.name} </label> 
            {/* <ColoredLine color = "black" / > */}
            
            <Table striped bordered hover style = {
                {
                    border: '2px solid gray'
                }
            } >
            <thead >
            <tr>
            
            <th> No </th> 
            <th className = 'title'> Title </th> 
            <th className = 'Author' > Author </th> 
            <th> < button 
            onClick = {
                this.sort
            } 
            > Date </button></th>
            
            <th> Actions </th> 
            </tr> 
            </thead>

<tbody>
            
            
{
     
 

       
       this.state.data!=undefined ?   Object.keys( this.state.data).map((data, index) => {
       
       var todos=  this.state.data[data]
       console.log(data)
       
       SortArr.push(data)
       var today = new Date(todos.date);
       var dd = today.getDate();
       var mm = today.getMonth() + 1; //January is 0!
       var yyyy = today.getFullYear();
       
       if (dd < 10) {
         dd = '0' + dd;
       }
       
       if (mm < 10) {
         mm = '0' + mm;
       }
       
       today = mm + '/' + dd + '/' + yyyy;
                  return ( 
    <tr>
                   <td>{index}</td>
                   <td className='title'>{todos.title}</td>
                    <td className='Author'>{todos.author} </td>
                   <td>{today}</td>
          
           
                   <td>    
                        <Button bsStyle = "danger"
                        bsSize = "small"
                        style = {
                            style.btnDel
                        }
                        onClick = {
                            this.deleteArticle.bind(this,  data , todos)
                        } 
                        > Delete </Button> 
                        
                        <Button bsStyle = "success"
                        bsSize = "small"
                        style = {
                            style.btnEdit
                        }
                        onClick = {
                            this.editArticle.bind(this,  data, todos)
                        } 
                        > Edit </Button> 
                        <Button bsStyle = "info"
                        bsSize = "small"
                        style = {
                            style.btnEdit
                        }
                        onClick = {
                            this.showPost.bind(this, index, todos)
                        } 
                        
                        > View </Button> 
              </td>
    </tr>

       )
        }) : <tr><td colspan='5'>No Data to Show</td></tr>

      
   
} 
</tbody>
</Table>
</div>
        )
        

    }

    }

