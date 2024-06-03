import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/full-stack' className="nav-item me-3" >ALL</Link>
            <Link to='/full-stack' className="nav-item me-3" >FULL STACK DEVELOPMENT</Link>
            <Link to='/data-science' className="nav-item me-3" >DATA SCIENCE</Link>
            <Link to='/cyber-crime' className="nav-item me-3" >CYBER SECURITY</Link>
            <Link to='/career' className="nav-item me-3" >CAREER</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar