import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [psw, setpsw] = useState("");

  return (
    <Container className="col-md-6 container__components">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={psw} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <p>
          Do you have not Account? <Link to="/registrasi">Sign Up</Link>
          <br />
          {/* <span onClick={forgotPasswordHandler}>
            <u>Forgot Password</u>
          </span> */}
        </p>
      </Form>
    </Container>
  );
};

export default Login;
