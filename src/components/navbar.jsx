/*
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
   
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Kontakt</Nav.Link>
            <Nav.Link href="#pricing">Pobočky</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      
    </>
  );
}

export default ColorSchemesExample; */


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
          <Nav.Link as={Link} to="/pobocky">Pobočky</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;