"use client";
import React from "react";
import styles from "./HeroSlider..module.scss";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonHoverWhite from "../common/buttons/ButtonHoverWhite/ButtonHoverWhite";

import firstSlideImage from "../../../../public/homepage/hero-slider/adorable-dog-park-nature-with-owner.jpg";

function HeroSlider() {
  return (
    <>
      <Container fluid className="px-0">
        <Row>
          <Col>
            <Carousel>
              <Carousel.Item>
                <Image
                  src={firstSlideImage}
                  alt="First slide"
                  className="imgcont"
                />
                <Carousel.Caption className="hero-caption">
                  <h1 className="text-start">Furry Friends Haven</h1>
                  <p className="text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="text-start">
                    <ButtonHoverWhite text="Shop Now" />
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={firstSlideImage}
                  alt="First slide"
                  className="imgcont"
                />
                <Carousel.Caption className="hero-caption">
                  <h1 className="text-start">Furry Friends Haven</h1>
                  <p className="text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="text-start">
                    <ButtonHoverWhite text="Shop Now" />
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src={firstSlideImage}
                  alt="First slide"
                  className="imgcont"
                />
                <Carousel.Caption className="hero-caption">
                  <h1 className="text-start">Furry Friends Haven</h1>
                  <p className="text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="text-start">
                    <ButtonHoverWhite text="Shop Now" />
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeroSlider;
