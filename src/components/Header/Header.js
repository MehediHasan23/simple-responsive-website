import React from 'react';
import './Header.css'
import { Container, Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap';
import logo from '../../assets/images/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar className='header-part' expand="lg">
  <Container>
    <Navbar.Brand as={NavLink} to='/home'><img width='80px'  src={logo}  alt="" /> <span class="fw-bold text-white">Coding Club Institute</span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={NavLink} to='/home'>HOME</Nav.Link>
        <Nav.Link as={NavLink} to='/about'>ABOUT</Nav.Link>
        <Nav.Link as={NavLink} to='/courses'>COURSES</Nav.Link>
        <Nav.Link as={NavLink} to='/contact'>CONTACT</Nav.Link>
        <Nav.Link as={NavLink} to='/cart'><FontAwesomeIcon icon={faShoppingCart} /><Badge>0</Badge></Nav.Link>
        <Nav.Link as={NavLink} to='/login'>LOG IN</Nav.Link>
        <Nav.Link as={NavLink} to='/signup'>SIGN UP</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;