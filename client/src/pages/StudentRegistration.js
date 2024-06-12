// src/pages/StudentRegistration.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import StudentRegistrationForm from '../components/StudentRegistrationForm';
import '../styles/Common.css';
import '../styles/StudentRegistration.css';

const StudentRegistration = () => {
  return (
    <div className="proper-alignment">
      <Container>
        <Row>
          <Col md={6} className='student-registration-form'>
            <h2 className="mb-4 text-center text-capitalize text-white">Student Registration Form</h2>
            <StudentRegistrationForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentRegistration;
