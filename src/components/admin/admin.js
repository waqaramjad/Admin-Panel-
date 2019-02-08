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
    Image ,
    Table
} from 'react-bootstrap';

import {
    apps
} from 'firebase';

var ChurchPlantingArr = []
var SportsArr = []
var SportsArr = []
var SeminaryArr = []
var MedicalArr = []
var CommunityDevelopmentArr = []
var KingdomBusinessArr = []
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
            Sports : undefined , 
            Seminary  : undefined , 
            ChurchPlanning  : undefined , 
            Medical : undefined , 
            CommunityDevelopment : undefined , 
            KingdomBusiness  : undefined , 

        }

        this.CreatePost = this.CreatePost.bind(this)
       
        this.ChurchPlantingSort = this.ChurchPlantingSort.bind(this)
        this.SportsSort = this.SportsSort.bind(this)
        this.SeminarySort = this.SeminarySort.bind(this)
        this.MedicalSort = this.MedicalSort.bind(this)
        this.CommunityDevelopmentSort = this.CommunityDevelopmentSort.bind(this)
        this.KingdomBusinessSort = this.KingdomBusinessSort.bind(this)
        
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

        //*****************************************    */
        if(data.POSTS['Seminary']!=undefined){
            var Seminary = data.POSTS['Seminary']
            this.setState({
                Seminary: Seminary
            })
        }
        else {
            this.setState({
                Seminary: undefined
                            })
        }

        //*****************************************    */
        if(data.POSTS['ChurchPlanning']!=undefined){
            var ChurchPlanning = data.POSTS['ChurchPlanning']
            this.setState({
                ChurchPlanning: ChurchPlanning
            })
        }
        else {
            this.setState({
                ChurchPlanning: undefined
                            })
        }

        //*****************************************  Medical  */
        if(data.POSTS['Medical']!=undefined){
            var Medical = data.POSTS['Medical']
            this.setState({
                Medical: Medical
            })
        }
        else {
            this.setState({
                Medical: undefined
                            })
        }

        //*****************************************  CommunityDevelopment  */
        if(data.POSTS['CommunityDevelopment']!=undefined){
            var CommunityDevelopment = data.POSTS['CommunityDevelopment']
            this.setState({
                CommunityDevelopment: CommunityDevelopment
            })
        }
        else {
            this.setState({
                CommunityDevelopment: undefined
                            })
        }

        //***************************************** KingdomBusiness   */
        if(data.POSTS['KingdomBusiness']!=undefined){
            var KingdomBusiness = data.POSTS['KingdomBusiness']
            this.setState({
                KingdomBusiness: KingdomBusiness
            })
        }
        else {
            this.setState({
                KingdomBusiness: undefined
                            })
        }

        //*****************************************    */
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

    /************************************* */
    ChurchPlantingSort(){
        var churchData = this.state.ChurchPlanning
        var churchObject = {}
        var ChurchPlantingArrReverse = ChurchPlantingArr.reverse()
        ChurchPlantingArrReverse.map((data , index )=>{


    var dummData = churchData[data]
    churchObject[data] = dummData

        })
this.setState({
    ChurchPlanning :  churchObject
})
    }


    /************************************* */
    /************************************* */
    SportsSort(){
        var SportsData = this.state.Sports
        var SportsObject = {}
        var SportsArrReverse = SportsArr.reverse()
        SportsArrReverse.map((data , index )=>{


    var dummData = SportsData[data]
    SportsObject[data] = dummData

        })
this.setState({
    Sports :  SportsObject
})
    }


    /************************************* */
    /************************************* */
    SeminarySort(){
        var SeminaryData = this.state.Seminary
        var SeminaryObject = {}
        var SeminaryArrReverse = SeminaryArr.reverse()
        SeminaryArrReverse.map((data , index )=>{


    var dummData = SeminaryData[data]
    SeminaryObject[data] = dummData

        })
this.setState({
    Seminary :  SeminaryObject
})
    }


    /************************************* */
    /************************************* */
    MedicalSort(){
        var MedicalData = this.state.Medical
        var MedicalObject = {}
        var MedicalArrReverse = MedicalArr.reverse()
        MedicalArrReverse.map((data , index )=>{


    var dummData = MedicalData[data]
    MedicalObject[data] = dummData

        })
this.setState({
    Medical :  MedicalObject
})
    }


    /************************************* */
    /************************************* */
    CommunityDevelopmentSort(){
        var CommunityDevelopmentData = this.state.CommunityDevelopment
        var CommunityDevelopmentObject = {}
        var CommunityDevelopmentArrReverse = CommunityDevelopmentArr.reverse()
        CommunityDevelopmentArrReverse.map((data , index )=>{


    var dummData = CommunityDevelopmentData[data]
    CommunityDevelopmentObject[data] = dummData

        })
this.setState({
    CommunityDevelopment :  CommunityDevelopmentObject
})
    }


    /************************************* */
    /************************************* */
    KingdomBusinessSort(){
        var KingdomBusinessData = this.state.KingdomBusiness
        var KingdomBusinessObject = {}
        var KingdomBusinessArrReverse = KingdomBusinessArr.reverse()
        KingdomBusinessArrReverse.map((data , index )=>{


    var dummData = KingdomBusinessData[data]
    KingdomBusinessObject[data] = dummData

        })
this.setState({
    KingdomBusiness : KingdomBusinessObject
})
    }


    /************************************* */
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



        const obj1 = {
            "20170007": {
              "id": 1 , 
              'sdf': 8
            },
            "20170008": {
              "id" : 2, 
              "dsf" :345
            },
            "20170009": {
             "id": 3
            },
            "20170010": {
              "id": 4
            }
          }
          
          const arrayReverseObj = (obj1) => {
            let newArray = []
          
            Object.keys(obj1)
              .sort()
              .reverse()
              .forEach(key => {
                console.log(key)
                newArray.push( {
                'key':key, 
                'title':obj1[key].title ,
                'avatar':obj1[key].avatar ,
                'editorHtml':obj1[key].editorHtml ,
                'category':obj1[key].category ,
                'date':obj1[key].date ,
                })
              })
          
            console.log(newArray)
            return newArray  
          }
          
          if(this.state.ChurchPlanning!=undefined)
          arrayReverseObj(this.state.ChurchPlanning)
           
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
            <Table striped bordered hover style={{border : '2px solid gray'}}>
            <thead>
              <tr >
                <th>No</th>
                <th>Title</th>
                <th>Author</th>
                <th><button onClick = {
                          this.SportsSort}>Date</button></th>
                <th>Actions</th>
              </tr>
            </thead>
          
            <tbody>
            
            {
                  
              

                    
                    this.state.Sports!=undefined ?   Object.keys(this.state.Sports).map((data, index) => {
                    //    var todos = this.state.Sports['data']
                   
                    SportsArr.push(data)
                    var todos= this.state.Sports[data]
                    console.log(data)
                    
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
                                <td >{todos.title}</td>
                                 <td>Mike </td>
                                <td>{today}</td>
                        
                                <td>    <
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
                        } > View < /Button> 
                        
                        </td>
    </tr>
   
                    )
                     }) : <tr><td colspan='5'>No Data to Show</td></tr>

                   
                
            } </tbody>
            </Table>



{/**********************************************************************church  planning  **********************/}
                <label style={style.caregoryLabel}> Church Planting</label>
            <ColoredLine color="black" />

            <Table striped bordered hover style={{border : '2px solid gray'}}>
  <thead>
    <tr >
      <th>No</th>
      <th>Title</th>
      <th>Author</th>
      <th><button onClick = {
                this.ChurchPlantingSort}>Date</button></th>
      <th>Actions</th>
    </tr>
  </thead>

  <tbody>


            {
                  
              

                    
                    this.state.ChurchPlanning!=undefined ?   Object.keys(this.state.ChurchPlanning).map((data, index) => {
                    //    var todos = this.state.Sports['data']
                    var todos= this.state.ChurchPlanning[data]
                    console.log(this.state.ChurchPlanning)
                    ChurchPlantingArr.push(data)
console.log(ChurchPlantingArr)
var object = this.state.ChurchPlanning
                     var newObject = {};
        var keys = [];

        for (var key in object) {
            keys.push(key);
        }
console.log(keys)

        for (var i = keys.length - 1; i >= 0; i--) {
          var value = object[keys[i]];
          newObject[keys[i]]= value;
        }       

        console.log(newObject)
                    // console.log(Object.assign([],this.state.ChurchPlanning).reverse())

                    
                    
                    console.log(this.state.Sports)
                    console.log(todos.date)
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
console.log(today)
// document.write(today);
                    
                    console.log(data)
                    
                     
                               return (
                                   
                                
                                <tr>
      <td>{index}</td>
      <td >{todos.title}</td>
      <td>{todos.author} </td>
      <td>{today}</td>
      <td><
                        Button bsStyle = "danger"
                        bsSize = "small"
                       
                        onClick = {
                            this.deleteArticle.bind(this,  data , todos)
                        } > Delete < /Button> <
                        Button bsStyle = "success"
                        bsSize = "small"
                        
                        onClick = {
                            this.editArticle.bind(this,  data, todos)
                        } > Edit < /Button> <
                        Button bsStyle = "info"
                        bsSize = "small"
                        
                        onClick = {
                            this.showPost.bind(this, index, todos)
                        } > View < /Button></td>
    </tr>
   
                    )
                     }) : <tr><td colspan='5'>No Data to Show</td></tr>

                   
                
            } </tbody>
            </Table>
                {/**********************************************************************end   **********************/}
{/**********************************************************************Seminary **********************/}
                <label style={style.caregoryLabel}> Seminary</label>
            <ColoredLine color="black" />
            <Table striped bordered hover style={{border : '2px solid gray'}}>
            <thead>
              <tr >
                <th>No</th>
                <th>Title</th>
                <th>Author</th>
                <th><button onClick = {
                          this.SeminarySort}>Date</button></th>
                <th>Actions</th>
              </tr>
            </thead>
          
            <tbody>
            
            
             {
                  
              

                    
                    this.state.Seminary!=undefined ?   Object.keys(this.state.Seminary).map((data, index) => {
                    //    var todos = this.state.Sports['data']
                    // console.log(this.state.Sports[todos])
                    
                    var todos= this.state.Seminary[data]
                    console.log(data)
                    
                    SeminaryArr.push(data)
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
                                <td >{todos.title}</td>
                                 <td>Mike </td>
                                <td>{today}</td>
                       
                        
                                <td>    <
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
                        } > View < /Button> 
                        </td>
    </tr>
   
                    )
                     }) : <tr><td colspan='5'>No Data to Show</td></tr>

                   
                
            } </tbody>
            </Table>
                     {/**********************************************************************end   **********************/}
{/**********************************************************************Medical **********************/}
                <label style={style.caregoryLabel}> Medical</label>
            <ColoredLine color="black" />
           
            <Table striped bordered hover style={{border : '2px solid gray'}}>
            <thead>
              <tr >
                <th>No</th>
                <th>Title</th>
                <th>Author</th>
                <th><button onClick = {
                          this.MedicalSort}>Date</button></th>
                <th>Actions</th>
              </tr>
            </thead>
          
            <tbody>
            
            {
                  
              

                    
                    this.state.Medical!=undefined ?   Object.keys(this.state.Medical).map((data, index) => {
                    //    var todos = this.state.Sports['data']
                    // console.log(this.state.Sports[todos])
                    
                    var todos= this.state.Medical[data]
                    console.log(data)
                    MedicalArr.push(data)
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
                                <td >{todos.title}</td>
                                 <td>Mike </td>
                                <td>{today}</td>

                                
                                
                                
                                <td>    <
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
                        } > View < /Button> 
                        </td>
    </tr>
   
                    )
                     }) : <tr><td colspan='5'>No Data to Show</td></tr>

                   
                
            } </tbody>
            </Table>

                {/**********************************************************************end   **********************/}
{/**********************************************************************CommunityDevelopment  **********************/}
                <label style={style.caregoryLabel}> Community Development</label>
            <ColoredLine color="black" />
            <Table striped bordered hover style={{border : '2px solid gray'}}>
            <thead>
              <tr >
                <th>No</th>
                <th>Title</th>
                <th>Author</th>
                <th><button onClick = {
                          this.CommunityDevelopmentSort}>Date</button></th>
                <th>Actions</th>
              </tr>
            </thead>
          
            <tbody>
 
            
            {
                  
              

                    
                    this.state.CommunityDevelopment!=undefined ?   Object.keys(this.state.CommunityDevelopment).map((data, index) => {
                    //    var todos = this.state.Sports['data']
                    // console.log(this.state.Sports[todos])
                    
                    var todos= this.state.CommunityDevelopment[data]
                    console.log(data)
                    CommunityDevelopmentArr.push(data)        
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
                                <td >{todos.title}</td>
                                 <td>Mike </td>
                                <td>{today}</td>
                        
                                <td>    <
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
                        } > View < /Button> 
                        </td>
    </tr>
   
                    )
                     }) : <tr><td colspan='5'>No Data to Show</td></tr>

                   
                
            } </tbody>
            </Table>

                {/**********************************************************************end   **********************/}
{/**********************************************************************KingdomBusiness  **********************/}
                <label style={style.caregoryLabel}> Kingdom Business</label>
            <ColoredLine color="black" />
            <Table striped bordered hover style={{border : '2px solid gray'}}>

         <thead>
              <tr >
                <th>No</th>
                <th>Title</th>
                <th>Author</th>
                <th><button onClick = {
                          this.KingdomBusinessSort}>Date</button></th>
                <th>Actions</th>
              </tr>
            </thead>
          
            <tbody>
            {
                  
              

                    
                    this.state.KingdomBusiness!=undefined ?   Object.keys(this.state.KingdomBusiness).map((data, index) => {
                    //    var todos = this.state.Sports['data']
                    // console.log(this.state.KingdomBusiness[todos])
                    
                    var todos= this.state.KingdomBusiness[data]
                    console.log(data)
                    KingdomBusinessArr.push(data)
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
                                <td >{todos.title}</td>
                                 <td>Mike </td>
                                <td>{today}</td>
                        
                                <td>    <
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
                        } > View < /Button> 
                     
                        </td>
    </tr>
   
                    )
                     }) : <tr><td colspan='5'>No Data to Show</td></tr>

                   
                
            } </tbody>
            </Table>


                {/**********************************************************************end   **********************/}

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