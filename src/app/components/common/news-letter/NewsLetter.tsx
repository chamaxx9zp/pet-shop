import React from 'react'
import styles from './NewsLetter.module.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function NewsLetter() {
  return (
    <div className={styles["background-color"]}>
      <Container>
        <Row className={styles["news-letter"]}>
          <Col md={7}>
            <div className="">
              <h1 className="text-white">Get In With Some Pet News</h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </Col>
          <Col md={5} className='d-flex align-items-center'>
            <div className="w-100">
            <InputGroup className="">
              <Form.Control
                aria-label="Enter Your Email Address"
                placeholder="Enter Your Email Address"
                className={styles['custom-input']}
              />
              <Button variant="" className={styles['btn-subscribe']}>
                Subscribe
              </Button>
            </InputGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewsLetter