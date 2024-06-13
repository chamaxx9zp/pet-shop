"use client"
import React from 'react'
import Image from "next/image";
import styles from './FormSection.module.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonHoverBrown from '../../common/buttons/ButtonHoverBrown/ButtonHoverBrown';
import card_img from '../../../../../public/contact-us/35.png'
import email_icon from '../../../../../public/contact-us/email.svg'
import location_icon from '../../../../../public/contact-us/location.svg'
import phone_icon from '../../../../../public/contact-us/phone.svg'


function FormSection() {
  return (
    <>
      <Container>
        <Row className={styles["row-padding"]}>
          <Col md={6}>
            <Card className="text-white text-center">
              <div className="imgcont">
                <Image src={card_img} alt="Form-Image" className="card-img" />
              </div>
              <Card.ImgOverlay className={`${styles["overlay-center"]}`}>
                <div className="d-flex align-items-center justify-content-start mt-5">
                  <span>
                    <Image src={phone_icon} alt="phone-icon" className="me-3" />
                  </span>
                  <div className="flex-column text-start">
                    <h5>Phone</h5>
                    <h6>+123 456 789</h6>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-start mt-5">
                  <span>
                    <Image
                      src={location_icon}
                      alt="location-icon"
                      className="me-3"
                    />
                  </span>
                  <div className="flex-column text-start">
                    <h5>Address</h5>
                    <h6>No. 17, 5th Street, Colombo 07</h6>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-start mt-5">
                  <span>
                    <Image src={email_icon} alt="email-icon" className="me-3" />
                  </span>
                  <div className="flex-column text-start">
                    <h6>Email</h6>
                    <h6>petshop@gmail.com</h6>
                  </div>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={6}>
            <div className={styles['form-background']}>
            <Form className='mt-3'>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name*</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Phone*</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <div className="text-center mt-5 pb-5">
                <ButtonHoverBrown text="send"/>
              </div>
            </Form>
            </div>
            
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FormSection