"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../../public/homepage/hero-slider/adorable-dog-park-nature-with-owner.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}