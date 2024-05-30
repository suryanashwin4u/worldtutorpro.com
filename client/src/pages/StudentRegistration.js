// src/pages/StudentRegistration.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import StudentRegistrationForm from '../components/StudentRegistrationForm';
import '../styles/Common.css';
import '../styles/StudentRegistration.css';

const StudentRegistration = () => {
  return (
    <div className="background-container proper-alignment">
      <Container className="mt-5 mb-5">
        <Row>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            {/* <Image src={studentIcon} alt="Student" className="student-icon" /> */}
          </Col>
          <Col md={6}>
            <h2 className="mb-4 text-center text-capitalize">Students Registration Form</h2>
            <StudentRegistrationForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentRegistration;
