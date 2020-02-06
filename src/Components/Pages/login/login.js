import React, { useState } from 'react';
import {Container,
  Form,
  Col,
  Button} from 'react-bootstrap';


function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container fluid="lg" className="" style={{ width:400,   height: 'auto', marginTop:'10%' }}>
    <Form noValidate validated={validated} onSubmit={handleSubmit} >
    <h1 className="" style={{textAlign: 'center', marginBottom:30}}>Login</h1>
      <Form.Row >
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Form.Row >
        <Form.Row >
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="Password"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
      </Form.Row>
      <Button type="submit"className="mt-5" style={{textAlign: 'center', display:'block',margin:'auto'}}>Login</Button>
    
    </Form>
    </Container>
       );
}

export default Login;

