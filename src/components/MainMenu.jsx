import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MainMenu() {
  return (
    <Navbar expand="lg" sticky="top" className="bg-secondary-subtle">
      <Container fluid="lg">
        <Navbar.Brand href="#home">LaDidas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#home">MEN</Nav.Link>
            <Nav.Link href="#link">WOMEN</Nav.Link>
            <Nav.Link href="#link">COLLECTION</Nav.Link>
            <Nav.Link href="#link">SALE</Nav.Link>
            <Nav.Link href="#link">WOMEN</Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <Nav.Link href="#home">OUR STORY</Nav.Link>
            <Nav.Link href="#home">CONTACT</Nav.Link>
            <Button variant="outline-dark" className="px-3 fs-3 border-0">
              <i class="fa-solid fa-bag-shopping"></i>
            </Button>
            <Button variant="outline-dark" className="px-3 fs-3 border-0">
              <i class="fa-regular fa-user"></i>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainMenu;
