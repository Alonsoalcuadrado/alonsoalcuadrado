import React from "react";
import logo from './../../assets/logo.png'
import './NavBar.scss'
import {  Nav, Navbar } from "react-bootstrap";
import {BrowserRouter , Routes,Route,Link } from "react-router-dom";
import  {Home,Service,Contact,AboutUs} from '../../pages'


function NavBar() {
    return (
        
       <>
       <BrowserRouter>
            <Navbar className="navbar" variant="dark" id="nav" expand="lg">
              <Navbar.Brand>
                <Link className="navbar__logo" to="/">
                  <img src={logo} alt="Not Found" width="45" height="35"/>
                  AL Cuadrado
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav"  >
                <Nav className="ms-auto">
                  <Link className="navbar__link" to="/">Home</Link>
                  <Link className="navbar__link" to="/services"> Servicios</Link>
                  <Link className="navbar__link"to="/contact">Contacto</Link>
                  <Link  className="navbar__link" to="/about-us">Nosotros</Link>
                </Nav>  
              </Navbar.Collapse>              
            </Navbar> 
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/services" element={<Service />}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/about-us" element={<AboutUs/>}></Route>
            </Routes>
        </BrowserRouter>
       </>
        
       
    )
}
export default NavBar
