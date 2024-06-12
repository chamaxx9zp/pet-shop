"use client";
import React from 'react'
import styles from "./HeroSlider.module.scss";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeroImage from '/public/contact-us/34.png'

function HeroSlider() {
  return (
    <>
    <Container fluid className="px-0">
        <Row>
          <Col>
            <Carousel indicators={false} controls={false}>
              <Carousel.Item>
                <Image
                  src={HeroImage}
                  alt="Hero Image"
                  className="imgcont"
                />
                <Carousel.Caption className={styles["hero-caption"]}>
                  <h1 className="text-start">Furry Friends Emporium</h1>
                </Carousel.Caption>
              </Carousel.Item>
              
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HeroSlider