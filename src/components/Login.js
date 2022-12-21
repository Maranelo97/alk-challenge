import React from 'react'
import axios from 'axios';
import sAlert from '@sweetalert/with-react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function Login() {

  const navigate = useNavigate();

  const submitH = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regEmail =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


     if(email === "" || password === "") {
        sAlert("Los campos","No pueden estar vacios" ,"error")
        return;
     }

     if(email !== "" && !regEmail.test(email)){
      sAlert("Type a valid email","invalid Email" , "error");
      return;
     }
     if(email !== "challenge@alkemy.org" || password !== "react"){
      sAlert(
      "You shall not pass", 
      "access denied", "error"
     )}

    
     axios
     .post('http://challenge-react.alkemy.org',{ email, password })
    .then(res => {
      sAlert("Right information","Lets send it!", "success");
      console.log(res.data);
      const tokenRecived = res.data.token;
      sessionStorage.setItem('token', tokenRecived);
      navigate("/list");
    })
  };
  


  return (
<>
    
  <h2 className='d-flex justify-content-center text-white'>Login Form</h2>
  <Form onSubmit={submitH} className="d-flex justify-content-center text-white">
      <Form.Group className="p-3 w-50">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email'  type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <br/>
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
        <Button variant="primary" type="submit" className='btn-dark m-3 '>
        Sign In
      </Button>
      </Form.Group>
    </Form>
    
    </>
  )
}

export default Login
