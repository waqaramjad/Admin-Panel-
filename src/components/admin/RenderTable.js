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
import style from '../Css/tableStyle'

export default class RenderTable extends Component {
    constructor(props) {

        super(props);

        this.state = {

        }
    }

    render() {

        return (


            
            <div >
            
            <label style = {
                style.caregoryLabel
            } > Sports </label> 
            <ColoredLine color = "black" / >
            
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
            <th> < button onClick = {
                // this.SportsSort
            } > Date </button></th>
            
            <th> Actions </th> 
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
                        } > Delete </Button> 
                        
                        <Button bsStyle = "success"
                        bsSize = "small"
                        style = {
                            style.btnEdit
                        }
                        onClick = {
                            this.editArticle.bind(this,  data, todos)
                        } > Edit </Button> 
                        <Button bsStyle = "info"
                        bsSize = "small"
                        style = {
                            style.btnEdit
                        }
                        onClick = {
                            this.showPost.bind(this, index, todos)
                        } > View </Button> 
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

