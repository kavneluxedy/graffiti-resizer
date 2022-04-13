import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { Outlet, Router, useNavigate } from "react-router-dom";
import { Container, Navbar, Row, Button, Nav } from "react-bootstrap";
const App = () => {
  const nav = useNavigate();

  const [newWidth, setNewWidth] = useState(500);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <img
              src="https://i.pinimg.com/originals/b9/6a/1c/b96a1c778ec7aea640c8e1eafa018cc4.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav fill className="me-auto">
            <Nav.Link href="format">Accueil</Nav.Link>
            <Nav.Link href="options">Redimensionner une image</Nav.Link>
            <Nav.Link href="help">Besoin d'aide ?</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet newWidth={newWidth} />
    </>
  );
};

export default App;
