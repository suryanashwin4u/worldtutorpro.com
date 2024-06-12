import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TutorRegistrationForm from '../components/TutorRegistrationForm';
import '../styles/Common.css';
import '../styles/TutorRegistration.css';

const TutorRegistration = () => {
  return (
    <div className="proper-alignment">
      <Container >
        <Row>
          <Col md={6} className="tutor-registration-form">
            <h2 className="mb-4 text-center text-capitalize text-white">Tutor Registration Form</h2>
            <TutorRegistrationForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TutorRegistration;