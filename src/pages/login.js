import React from 'react';
import ForgottenPw from './forgottenpw';
import { FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className="mt-5"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Form style={{ backgroundColor: "#FFF9F0", width: "35%", borderRadius: "15px", }} className='px-3 py-3 '>
        <p className="text-center fs-1 fw-bolder" style={{ color: "#019267", }}><u>Log</u> in</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='fw-bold'>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" style={{ backgroundColor: "rgba(1, 146, 103, 0.1)", }} />
          {/* <Form.Text className="text-muted" style={{fontSize:'10px'}}>
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='fw-bold'>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" style={{ backgroundColor: "rgba(1, 146, 103, 0.1)", }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Stay logged" />
        </Form.Group>
        <div className="text-center">
          <Button style={{ backgroundColor: "#019267", color: "eee", borderRadius: "15px", }} className="mb-2" type="submit">
            Submit
          </Button>
          <Link to="/forgotten_password">
            <p style={{ textDecoration: "underline", color: "#019267" }}>
              Fogot your password ?
            </p>
          </Link>
        </div>

      </Form>
    </div>
  );
};

export default Login;