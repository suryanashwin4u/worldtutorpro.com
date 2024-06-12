// src/components/TutorStudentRegistration.js
import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../styles/TutorStudentRegistration.css';
import StudentRegistration from './StudentRegistration';
import TutorRegistration from './TutorRegistration';

const TutorStudentRegistration = () => {
    const [selectedForm,
        setSelectedForm] = useState('student');

    const handleFormToggle = (formType) => {
        setSelectedForm(formType);
    };

    return (
        <Container className="registration-page">
            <Row className="justify-content-center my-4">
                <Col md="auto" className="text-center">
                    <Button
                        variant="outline-primary"
                        className={`toggle-btn ${selectedForm === 'student'
                        ? 'active'
                        : ''}`}
                        onClick={() => handleFormToggle('student')}>
                        Student Registration
                    </Button>
                    <Button
                        variant="outline-primary"
                        className={`toggle-btn ${selectedForm === 'tutor'
                        ? 'active'
                        : ''} ml-2`}
                        onClick={() => handleFormToggle('tutor')}>
                        Tutor Registration
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    {selectedForm === 'student'
                        ? (<StudentRegistration/>)
                        : (<TutorRegistration/>)}
                </Col>
            </Row>
        </Container>
    );
};

export default TutorStudentRegistration;
