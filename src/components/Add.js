import React, { useState } from 'react'
import { Button , Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { v4 as uuid } from 'uuid';
import Employee from './Employee';
import {useNavigate} from 'react-router-dom';
const Add = () => {
    const [name , setName] =useState('');
    const [email , setEmail] =useState('');
 
    const history = useNavigate();

    const handelSubmit = (e)=>{
        e.preventDefault();
        const ids = uuid();
        let uniquiId = ids.slice(0,8);
        let a = name ,
        b = email;
        Employee.push({id: uniquiId , Name : a , Email : b});
        
        history("/");
    }
  return (
    <div>
        <Form className='d-gird gap-2' style={{margin : "15rem"}}>
          <Form.Group className='mb-3' controlId='fromName'>
            <Form.Control type='text' placeholder='Enter your Name' value={name} required onChange={(e)=>setName(e.target.value)}>
            </Form.Control>
          </Form.Group>


          <Form.Group className='mb-3' controlId='fromAge'>
            <Form.Control type='email' placeholder='Enter your Name' value={email} required onChange={(e)=>setEmail(e.target.value)}>
            </Form.Control>
          </Form.Group>

          <Button type='submit' onClick={(e)=>handelSubmit(e)}>submit</Button>
        </Form>
    </div>
  )
}

export default Add;