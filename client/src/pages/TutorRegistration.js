import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TutorRegistrationForm from '../components/TutorRegistrationForm';
// import tutor from '../images/education-bg1.svg';
import '../styles/TutorRegistration.css';

const TutorRegistration = () => {
  return (
    <div className="center-container">
      <Container className="mt-5 mb-5">
        <Row>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            {/* <Image src={tutor} alt="Tutor" className="tutor-icon" /> */}
          </Col>
          <Col md={6} className="tutor-registration-form">
            <h2 className="mb-4 text-center text-capitalize text-white">Tutors Registration Form</h2>
            <TutorRegistrationForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TutorRegistration;