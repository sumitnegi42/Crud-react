import React, { Fragment } from 'react'
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Employee from './Employee';
import {Link , useNavigate} from 'react-router-dom';
const Home = () => {

    const alignCenter = {
        textAlign: "center"
    }

let history = useNavigate();

   const handelDelete = (id)=>{
    alert("do you want to delete this");
     let index = Employee.map((e)=>{
        return e.id
     }).indexOf(id);
    console.log(index)
     Employee.splice(index, 1);
     history('/');
    }
  const  handelEdit = (id , name , email)=>{
     localStorage.setItem('Name', name);
     localStorage.setItem('Email', email);
     localStorage.setItem('Id', id);
     history('/');
  }
  return (
   <Fragment>
    <div style={{margin : "7rem"}}>
        <Table striped bordered hover size="sm"  style={alignCenter}>
            <thead>
                <th>
                    Name
                </th>
                <th>
                    Email
                </th>
                <th>
                    Actions
                </th>
            </thead>
            <tbody>
                {
                    Employee && Employee.length > 0 
                    ? 
                    Employee.map((item) =>{
                        return (
                            <tr>
                                <td>
                                    {item.Name}
                                </td>
                                <td>
                                    {item.Email}
                                </td>
                                <td>
                                    <Link to={`/edit`}>
                                    <Button className='btn btn-success' onClick={()=>handelEdit(item.id, item.Name, item.Email)}>
                                        Edit
                                    </Button>
                                    </Link>
                                    &nbsp;
                                    &nbsp;
                                    <Button className='btn btn-danger' onClick={()=>handelDelete(item.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })
                    :
                    <p>There is no reacord </p>
                  
                }
            </tbody>
        </Table>
        <br />
        <br/>
       <Link className='d-grid gap-2' to={'/create'}>
       <Button size='lg'>Create</Button>
       </Link>
    </div>
   </Fragment>
  )
}

export default Home