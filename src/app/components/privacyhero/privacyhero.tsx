import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import css from '@/app/components/privacyhero/privacyhero.module.css'; // Import CSS file for custom styling

const Privacyhero = () => {
  return (
    <section className={css.bgherobackground}>
      <Container className="py-4 py-xl-5">
        <Row className="gy-4 gy-md-0">
          <Col md={6} className="text-center text-md-start d-flex justify-content-center align-items-center">
            <div>
              <h2 className="fw-bold">pet shop private notice</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Privacyhero;
