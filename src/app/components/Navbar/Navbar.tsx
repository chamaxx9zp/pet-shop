'use client'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '@/app/images/LOGO.png'; 
import cart from '@/app/images/Icon ionic-ios-cart.png';

import '@/app/components/Navbar/Navbar.css'; // Fixed the import for CSS file
const Navbarcomponent = () => {
  return (
    <>
      <Navbar expand="lg" className="customnavbar">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo.src} // Replace with your logo path
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="Borcelle logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
            <Nav className="mx-auto custom-nav">
              <Nav.Link href="#home" className="custom-nav-link">Home</Nav.Link>
              <Nav.Link href="#about" className="custom-nav-link">About Us</Nav.Link>
              <Nav.Link href="#shop" className="custom-nav-link">Shop</Nav.Link>
              <Nav.Link href="#blogs" className="custom-nav-link">Blogs</Nav.Link>
              <Nav.Link href="#contact" className="custom-nav-link">Contact Us</Nav.Link>
              <Nav.Link href="#privacy" className="custom-nav-link">Privacy Policy</Nav.Link>
              <Nav.Link href="#terms" className="custom-nav-link">Terms & Conditions</Nav.Link>
            </Nav>
            <Nav className="ml-auto custom-cart">
              <Nav.Link href="#cart" className="custom-nav-link">
                <img
                  src={cart.src}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Cart"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarcomponent;
