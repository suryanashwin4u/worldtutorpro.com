// src/components/StudentRegistrationForm.js
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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMultiSelectChange = (e) => {
    const { name, options } = e.target;
    const selectedOptions = Array.from(options).filter(option => option.selected).map(option => option.value);
    setFormData({
      ...formData,
      [name]: selectedOptions,
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
          <Form.Group className="mb-3" controlId="formParentName">
            <Form.Control
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Parent's Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formStudentName">
            <Form.Control
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Student's Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formStudentGender">
            <Form.Control
              as="select"
              name="studentGender"
              value={formData.studentGender}
              onChange={handleChange}
            >
              <option value="">Student's Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Control>
          </Form.Group>
        </>
      )}

      {currentStep === 2 && (
        <>
          <Form.Group className="mb-3" controlId="formPhoneNumber">
            <Form.Control
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formWhatsappNumber">
            <Form.Control
              type="text"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              placeholder="WhatsApp Number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmailAddress">
            <Form.Control
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="Email Address"
            />
          </Form.Group>
        </>
      )}

      {currentStep === 3 && (
        <>
          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCity">
            <Form.Control
              as="select"
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="">City</option>
              <option value="City1">City1</option>
              <option value="City2">City2</option>
              {/* Add more options as needed */}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formState">
            <Form.Control
              as="select"
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">State</option>
              <option value="State1">State1</option>
              <option value="State2">State2</option>
              {/* Add more options as needed */}
            </Form.Control>
          </Form.Group>
        </>
      )}

      {currentStep === 4 && (
        <>
          <Form.Group className="mb-3" controlId="formTutorGenderPreference">
            <Form.Control
              as="select"
              name="tutorGenderPreference"
              value={formData.tutorGenderPreference}
              onChange={handleChange}
            >
              <option value="">Tutor Gender Preference</option>
              <option value="male">Male Tutor</option>
              <option value="female">Female Tutor</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formClassesList">
            <Form.Control
              as="select"
              name="classesList"
              multiple
              value={formData.classesList}
              onChange={handleMultiSelectChange}
            >
              <option value="class6">Class 6</option>
              <option value="class7">Class 7</option>
              {/* Add more options as needed */}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSubjectsList">
            <Form.Control
              as="select"
              name="subjectsList"
              multiple
              value={formData.subjectsList}
              onChange={handleMultiSelectChange}
            >
              <option value="maths">Maths</option>
              <option value="science">Science</option>
              {/* Add more options as needed */}
            </Form.Control>
          </Form.Group>
        </>
      )}

      <Row className="mt-3">
        <Col>
          <Button variant="danger" onClick={handleClear} className="mr-2">
            Clear
          </Button>
        </Col>
        <Col className="button-container">
          {currentStep > 1 && (
            <Button variant="secondary" onClick={prevStep}>
              Previous
            </Button>
          )}
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