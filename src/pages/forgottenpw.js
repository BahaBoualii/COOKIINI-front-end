import React from 'react';
import { FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Form } from 'react-bootstrap';
const ForgottenPw = () => {
  return (
    <div className="mt-5 mx-md-5 px-md-3"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Form style={{borderRadius:"15px",backgroundColor:"#FFF9F0"}} className='px-5 py-4 mx-5'>
        <p className="text-center fs-1 fw-bolder mb-4 mt-4" style={{color:"#019267",}}>Reset your password</p>
        <Form.Group className="mb-3" controlId="formBasicEmail px-3 py-3">
          <p className='text-start fs-5'>
            Lost your password ? Please enter your email address. You will receive <br/>a <u>link </u>to create a new password via email.
          </p>
          <Form.Label className='fw-bold mt-3'>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" style={{backgroundColor:"rgba(1, 146, 103, 0.1)",}} />
          
        </Form.Group>

        <div className="text-start mt-5">
        <Button style={{backgroundColor:"#019267",color:"eee",borderRadius:"15px",}} className="mb-5 fw-bold " type="submit">
          Reset Password
        </Button>
        </div>
        
      </Form>
    </div>
  );
};

export default ForgottenPw;