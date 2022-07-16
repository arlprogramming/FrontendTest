import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">FrontEnd</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="/filter">Filter</Nav.Link>
            <Nav.Link href="/">CRUD</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuBar;
