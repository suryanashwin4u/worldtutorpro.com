// src/components/StudnetRegistrationForm.js
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/StudentRegistrationForm.css';

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    studentGender: '',
    phoneNumber: '',
    whatsappNumber: '',
    emailAddress: '',
    address: '',
    city: '',
    state: '',
    tutorGenderPreference: '',
    classesList: [],
    subjectsList: [],
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleClear = () => {
    setFormData({      
      parentName: '',
      studentName: '',
      studentGender: '',
      phoneNumber: '',
      whatsappNumber: '',
      emailAddress: '',
      address: '',
      city: '',
      state: '',
      tutorGenderPreference: '',
      classesList: [],
      subjectsList: [],
    });
    setCurrentStep(1);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <Form onSubmit={handleSubmit} className="student-registration-form">
      {currentStep === 1 && (
        <>
        <Form.Group controlId="formStudentName">
          <Form.Control
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Enter student's name"
          />
        </Form.Group>
        <Form.Group controlId="formStudentGender">
          <Form.Control
            as="select"
            name="studentGender"
            value={formData.studentGender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Form.Control>
        </Form.Group>
        </>
      )}

      {currentStep === 2 && (
        <>
        <Form.Group controlId="formPhoneNumber">
          <Form.Control
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </Form.Group>
        <Form.Group controlId="formWhatsappNumber">
          <Form.Control
            type="text"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            placeholder="Enter WhatsApp number"
          />
        </Form.Group>
        </>
      )}

      {currentStep === 3 && (
        <>
        <Form.Group controlId="formAddress">
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter address"
          />
        </Form.Group>
        <Form.Group controlId="formCity">
          <Form.Control
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
          />
        </Form.Group>
        <Form.Group controlId="formState">
          <Form.Control
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter state"
          />
        </Form.Group>
        </>
      )}

      {currentStep === 4 && (
        <>
        <Form.Group controlId="formTutorGenderPreference">
        <Form.Control
          as="select"
          name="tutorGenderPreference"
          value={formData.tutorGenderPreference}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="male">Male Tutor</option>
          <option value="female">Female Tutor</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formClassesList">
        <Form.Control
            as="select"
            name="classesList"
            value={formData.classesList}
            onChange={handleChange}
          >
          <option value="">Select Classes</option>
          <option value="">class 6th</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formSubjectsList">
        <Form.Control
            as="select"
            name="subjectsList"
            value={formData.subjectsList}
            onChange={handleChange}
          >
            <option value="">Select Subjects</option>
            <option value="">Maths</option>
        </Form.Control>
      </Form.Group>
        </>
      )}

      <Row className="mt-4">
        <Col>
          {currentStep > 1 && (
            <Button variant="secondary" onClick={prevStep}>
              Previous
            </Button>
          )}
        </Col>
        <Col className="button-container">
          <Button variant="danger" onClick={handleClear} className="mr-2">
            Clear
          </Button>
          {currentStep < 4 ? (
            <Button variant="primary" onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button variant="success" type="submit">
              Submit
            </Button>
          )}
        </Col>
      </Row>
    </Form>
  );
};

export default StudentRegistrationForm;