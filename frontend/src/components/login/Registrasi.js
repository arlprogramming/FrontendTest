import React from "react";

import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Registrasi = () => {
  return (
    <Container>
      <Container className="col-md-6 container__components">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
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
