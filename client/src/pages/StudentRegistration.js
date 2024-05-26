// src/pages/StudentRegistration.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import StudentRegistrationForm from '../components/StudentRegistrationForm';
import '../styles/StudentRegistration.css';

const StudentRegistration = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          {/* <Image src={studentIcon} alt="Student" className="student-icon" /> */}
        </Col>
        <Col md={6}>
          <h2 className="mb-4">Students Registration Form</h2>
          <StudentRegistrationForm />
        </Col>
      </Row>
    </Container>
  );
};

export default StudentRegistration;
