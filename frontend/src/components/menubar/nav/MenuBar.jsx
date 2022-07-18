import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">FrontEnd</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/filter">Filter</Nav.Link>
            <Nav.Link href="/crud">CRUD</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuBar;
