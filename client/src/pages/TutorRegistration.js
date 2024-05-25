// src/pages/TutorRegistration.js
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import TutorRegistrationForm from '../components/TutorRegistrationForm';
import tutor from '../images/tutor-icon.svg';
import '../styles/TutorRegistration.css';

const TutorRegistration = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <Image src={tutor} alt="Tutor" className="tutor-icon" />
        </Col>
        <Col md={6}>
          <h2 className="mb-4">Tutors Registration Form</h2>
          <TutorRegistrationForm />
        </Col>
      </Row>
    </Container>
  );
};

export default TutorRegistration;
