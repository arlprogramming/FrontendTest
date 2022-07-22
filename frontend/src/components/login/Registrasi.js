import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Registrasi = () => {
  const [email, setEmail] = useState([]);
  const [name, setName] = useState([]);
  const [psw, setPsw] = useState([]);

  const onChangeEmail = (mail) => {
    // console.log(mail.target.value);
    const value = mail.target.value;
    setEmail(value);
  };

  const onChangeName = (name) => {
    // console.log(mail.target.value);
    const value = name.target.value;
    setName(value);
  };

  const onChangePsw = (psw) => {
    // console.log(mail.target.value);
    const value = psw.target.value;
    setPsw(value);
  };

  const Signup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, psw);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container>
      <Container className="col-md-6 container__components">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={onChangeEmail}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Full Name"
              value={name}
              onChange={onChangeName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <input
              type="password"
              className="form-control"
              id="psw"
              placeholder="Password"
              value={psw}
              onChange={onChangePsw}
            />
          </Form.Group>

          <Button variant="primary" onClick={Signup}>
            Sign Up
          </Button>
          <p>
            Do you have Account? <Link to="/login">Login</Link>
          </p>
        </Form>
      </Container>
    </Container>
  );
};

export default Registrasi;
