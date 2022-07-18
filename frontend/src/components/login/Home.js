import React, { useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";

import { auth } from "../firebase/firebase";

const Home = () => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      //jika user exist berarti ada yang login
      if (!user) {
        user.history.pushState("/login");
      }
    });
  });
  return (
    <Container>
      <Card>
        <Card.Header>Caution</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>Hallo, Now you at Home!!</Card.Text>
          <Button variant="primary">Logout</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
