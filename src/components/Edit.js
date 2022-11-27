import React, { useEffect, useState } from 'react'
import { Button , Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  
// import { v4 as uuid } from 'uuid';
import Employee from './Employee';
import {useNavigate} from 'react-router-dom';
const Edit = () => {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [id , setId] = useState("");
 
    let history = useNavigate();

    var index = Employee.map(e =>{
        return e.id
    }).indexOf(id);


    const handelSubmit = (e)=>{
        e.preventDefault();
        let a = Employee[index];
        a.Name = name;
        a.Email = email;

        history('/');
    }

     useEffect(()=>{
        setName(localStorage.getItem('Name'));
        setEmail(localStorage.getItem('Email'));
        setId(localStorage.getItem('Id'));
     }, [])
  return (
    <div>
         <Form className='d-gird gap-2' style={{margin : "15rem"}}>
          <Form.Group className='mb-3' controlId='fromName'>
            <Form.Control type='text' placeholder='Enter your Name' value={name} required onChange={(e)=>setName(e.target.value)}>
            </Form.Control>
          </Form.Group>


          <Form.Group className='mb-3' controlId='fromAge'>
            <Form.Control type='email' placeholder='Enter your Email' value={email} required onChange={(e)=>setEmail(e.target.value)}>
            </Form.Control>
          </Form.Group>

          <Button className='d-grid gap-2' type='submit' onClick={(e)=>handelSubmit(e)}>update</Button>
        </Form>
    </div>
  )
}

export default Edit