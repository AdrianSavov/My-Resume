import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './NavbarComponent.css'

function NavbarComponent() {
  return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Resume</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='my-work'>My Work</Nav.Link>
            <Nav.Link as={Link} to='my-skills'>My Skills</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavbarComponent;