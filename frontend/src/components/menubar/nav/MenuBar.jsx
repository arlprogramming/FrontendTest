import React, { useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { Nav, Navbar, Container, Button } from "react-bootstrap";

const MenuBar = () => {
  const [user, setUser] = useState([]);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const Signout = async () => {
    await signOut(auth);
  };
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

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {" "}
              {!user ? "React" : "Hallo"} {user?.email}
            </Navbar.Text>{" "}
            <Button variant="link" size="sm" onClick={Signout}>
              {!user ? <Nav.Link href="/login">Login</Nav.Link> : "Sign Out"}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuBar;
