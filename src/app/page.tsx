"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "../../public/homepage/hero-slider/adorable-dog-park-nature-with-owner.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// featured component
import Figure from "react-bootstrap/Figure";
import feature1 from "../../public/homepage/featured-products/featured1.png";

export default function Home() {
  return (
    <>
      <Container fluid className="px-0">
        <Row>
          <Col>
            <Carousel indicators={false} controls={false} interval={null}>
              <Carousel.Item>
                <Image
                  src={CarouselImage}
                  alt="carousel_image"
                  className="imgcont"
                />
                <Carousel.Caption className="hero-caption">
                  <h1 className="text-start">Furry Friends Haven</h1>
                  <p className="text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Button
                    className="d-flex justify-content-start"
                    variant="light"
                  >
                    Shop Now
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={3}>
           
              <Image
                width={171}
                height={180}
                alt="171x180"
                src={feature1}
              />
             
          </Col>
        </Row>
      </Container>
    </>
  );
}
