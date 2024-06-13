import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import dogFood from '../../images/4.png';
import catFood from '../../images/5.png';
import birdFood from '../../images/6.png';
import fishFood from '../../images/7.png';
import css from  '@/app/homepage/Foods/foods.module.css';

const foods = () => {
  return (
    <Container className="foods-section">
      <Row>
        <Col>
          <Card className="food-card">
            <Card.Img variant ="top" src={dogFood.src} alt="Dog Food 1" />
            <Card.Body>
              <Card.Title>Dogs Foods</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="food-card">
          <Card.Img variant ="top" src={catFood.src} alt="Dog Food 1" />
            {/* <Card.Img variant="top" src={catFood,src} alt="Cats Foods" /> */}
            <Card.Body>
              <Card.Title>Cats Foods</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="food-card">
          <Card.Img variant ="top" src={birdFood.src} alt="Dog Food 1" />
            {/* <Card.Img variant="top" src={birdFood,src} alt="Birds Foods" /> */}
            <Card.Body>
              <Card.Title>Birds Foods</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="food-card">
            {/* <Card.Img variant="top" src={fishFood,src} alt="Fish Foods" /> */}
            <Card.Img variant ="top" src={fishFood.src} alt="Dog Food 1" />
            <Card.Body>
              <Card.Title className="card-text">Fish Foods</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default foods;