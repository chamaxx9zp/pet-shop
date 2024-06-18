"use client"
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './NavbarSec.module.scss'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "next/image";
import cart_icon from '../../../../../public/navbar/cart.svg'
import logo from '../../../../../public/navbar/logo.png'

function NavbarSec() {
  return (
    <>
      <Navbar expand="lg" className={styles['custom-nav']}>
      <Container>
        <Navbar.Brand href="/">
            <div>
                <Image
                  src={logo}
                  alt="Blog-Image-1"
                  className={styles['logo']}
                />
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className={styles['nav-link']}>Home</Nav.Link>
            <Nav.Link href="/about-us" className={styles['nav-link']}>About Us</Nav.Link>
            <Nav.Link href="/shop" className={styles['nav-link']}>Shop</Nav.Link>
            <Nav.Link href="/blog" className={styles['nav-link']}>Blogs</Nav.Link>
            <Nav.Link href="/contact-us" className={styles['nav-link']}>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="">
            <div>
                <Image
                  src={cart_icon}
                  alt="cart-icon"
                />
            </div>
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarSec