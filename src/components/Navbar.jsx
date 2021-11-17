//Here goes the navbar
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from './../assets/logo.png';
import './NavStyle.css';

function NavBar() {
    return (
      <Navbar id="nav" expand="lg" className="navbar" variant="dark">
        <Container>
          <img src={logo} alt="logo" className="Nav-logo" width="45" height="35"/>
          <Navbar.Brand href="#home">
            Al Cuadrado</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#servicios">Servicios</Nav.Link>
              <Nav.Link href="#aboutus">Nosotros</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;