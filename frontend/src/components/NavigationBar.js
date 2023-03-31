import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";

function NavigationBar() {
  return (
    <Navbar className="m-auto" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Allergy Diary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>s
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
