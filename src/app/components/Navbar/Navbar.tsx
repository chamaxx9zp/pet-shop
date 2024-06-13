'use client'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/app/images/LOGO.png'; 
import cart from '@/app/images/Icon ionic-ios-cart.png';
import './Navbar.module.css'; 

const Navbarcomponent = () => {
  return (
    <>
      <Navbar expand="lg" className="customnavbar">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand>
              <Image
                src={logo}
                width={60}
                height={60}
                className="d-inline-block align-top"
                alt="Borcelle logo"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
            <Nav className="mx-auto custom-nav">
              <Link href="/" passHref>
                <Nav.Link className="custom-nav-link" href='/'>Home</Nav.Link>
              </Link>
              <Link href="/about-us" passHref>
                <Nav.Link className="custom-nav-link" href='/about-us'>About Us</Nav.Link>
              </Link>
              <Link href="/shopItem" passHref>
                <Nav.Link className="custom-nav-link" href='/shopItem'>Shop</Nav.Link>
              </Link>
              <Link href="/blog" passHref>
                <Nav.Link className="custom-nav-link" href='/blog'>Blogs</Nav.Link>
              </Link>
              <Link href="/contact-us" passHref>
                <Nav.Link className="custom-nav-link" href='/contact-us'>Contact Us</Nav.Link>
              </Link>
              <Link href="/privacy-policy" passHref>
                <Nav.Link className="custom-nav-link" href='/privacy-policy'>Privacy Policy</Nav.Link>
              </Link>
              <Link href="/terms" passHref>
                <Nav.Link className="custom-nav-link" href='/'>Terms & Conditions</Nav.Link>
              </Link>
            </Nav>
            <Nav className="ms-auto custom-cart">
              <Link href="#cart" passHref>
                <Nav.Link className="custom-nav-link">
                  <Image
                    src={cart}
                    width={30}
                    height={30}
                    className="d-inline-block align-top"
                    alt="Cart"
                  />
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarcomponent;
