import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");

  const onChangeEmail = (mail) => {
    //console.log(mail.target.value);
    const value = mail.target.value;
    setEmail(value);
  };
  const onChangePsw = (pass) => {
    //console.log(pass.target.value);
    const value = pass.target.value;
    setPsw(value);
  };

  const Sign = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, psw);
      //console.log(user);
    } catch (error) {
      console.log(error.message);
      alert("Your email or Password is Wrong");
    }
  };

  return (
    <Container className="col-md-6 container__components">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={onChangeEmail}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={psw}
            onChange={onChangePsw}
          />
        </Form.Group>

        <Button variant="primary" onClick={Sign}>
          Login
        </Button>
        <p>
          Do you have not Account? <Link to="/registrasi">Sign Up</Link>
          <br />
        </p>
      </Form>
    </Container>
  );
};

export default Login;
