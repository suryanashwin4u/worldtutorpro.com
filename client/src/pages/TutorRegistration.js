import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TutorRegistrationForm from '../components/TutorRegistrationForm';
import '../styles/Common.css';
import '../styles/TutorRegistration.css';

const TutorRegistration = () => {
  return (
    <div className="background-container proper-alignment">
      <Container className="mt-5 mb-5">
        <Row>
          <Col md={6} className="d-flex justify-content-center align-items-center">

          </Col>
          <Col md={6} className="tutor-registration-form">
            <h2 className="mb-4 text-center text-capitalize text-dark">Tutors Registration Form</h2>
            <TutorRegistrationForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TutorRegistration;