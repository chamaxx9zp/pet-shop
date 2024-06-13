import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import image1 from '@/app/images/10.png'; // Assuming you have imported images correctly
import image2 from '@/app/images/11.png';
import css from './mission.module.css'

const mission = () => {
  return (
    <Container className="py-4 py-xl-5">
      <div className="col-md-8 col-xl-6 text-center mx-auto">
        <p className={css.mb4}>About Us</p>
        <h2 className={css.mb4}>Furry Friends Family</h2>
      </div>
      <Row className="gy-4 gy-md-0">
        <Col md={6}>
          <div className="d-flex">
            <div className="p-xl-1 m-xl-3 p-md-2 m-md-2">
              <Image className="rounded img-fluid w-100 fit-cover" src={image2.src} alt="Furry Friend 2" />
            </div>
            <div className="p-xl-1 m-xl-3 p-md-2 m-md-2">
              <Image className="rounded img-fluid w-100 fit-cover" src={image1.src} alt="Furry Friend 1" />
            </div>
          </div>
        </Col>
        <Col md={6} className="d-md-flex align-items-md-center">
          <div className="col text-center d-flex flex-column align-items-center align-items-xl-center">
            <div className="mb-3">
              <FontAwesomeIcon icon={faCircle} size="2x" className="text-circle text-white" />
            </div>
            <div>
              <h4 className="text-white">welcome our petshop</h4>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in form. Duis aute irure dolor in reprehenderit in voluptate.</p>
              <h4 className="text-white">our mission</h4>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in form. Duis aute irure dolor in reprehenderit in voluptate.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default mission;

