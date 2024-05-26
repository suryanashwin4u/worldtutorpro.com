// src/components/TutorRegistrationForm.js
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/TutorRegistrationForm.css';

const TutorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    city: '',
    preferredCityAreas: '',
    pinCode: '',
    phoneNumber: '',
    language: '',
    education: '',
    university: '',
    subjects: '',
    classMode: '',
    teachingExperience: '',
    description: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      birthDate: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      gender: '',
      city: '',
      preferredCityAreas: '',
      pinCode: '',
      phoneNumber: '',
      language: '',
      education: '',
      university: '',
      subjects: '',
      classMode: '',
      teachingExperience: '',
      description: ''
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
    <Form onSubmit={handleSubmit} className="tutor-registration-form">
      {currentStep === 1 && (
        <>
          <Form.Group controlId="formName">
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formGender">
            <Form.Control
              as="select"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>
        </>
      )}

      {currentStep === 2 && (
        <>
          <Form.Group controlId="formCity">
            <Form.Control
              as="select"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <option value="">Select a city</option>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formPreferredCityAreas">
            <Form.Control
              type="text"
              name="preferredCityAreas"
              value={formData.preferredCityAreas}
              onChange={handleChange}
              placeholder="Enter preferred city areas"
              required
            />
          </Form.Group>
          <Form.Group controlId="formPinCode">
            <Form.Control
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              placeholder="Enter your pin code"
              required
            />
          </Form.Group>
          <Form.Group controlId="formPhoneNumber">
            <Form.Control
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </Form.Group>
        </>
      )}

      {currentStep === 3 && (
        <>
        <Form.Group controlId="formAge">
            <Form.Control
              as="select"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            >
              <option value="">Select Your Age</option>
              <option value="">1</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formLanguage">
            <Form.Control
              as="select"
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
            >
              <option value="">Select languages you speak</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="spanish">Spanish</option>
              {/* Add other languages as needed */}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formEducation">
            <Form.Control
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="Enter your highest qualification"
              required
            />
          </Form.Group>
          <Form.Group controlId="formUniversity">
            <Form.Control
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
              placeholder="Enter your university"
              required
            />
          </Form.Group>
        </>
      )}

      {currentStep === 4 && (
        <>
          <Form.Group controlId="formSubjects">
            <Form.Control
              as="select"
              name="subjects"
              value={formData.subjects}
              onChange={handleChange}
              required
            >
              <option value="">Type and select subjects you teach</option>
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="english">English</option>
              {/* Add other subjects as needed */}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBoard">
            <Form.Control
              as="select"
              name="board"
              value={formData.board}
              onChange={handleChange}
              required
            >
              <option value="">Select boards you teach</option>
              <option value="cbse">CBSE</option>
              <option value="icse">ICSE</option>
              <option value="state">State</option>
              {/* Add other boards as needed */}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formClassMode">
            <Form.Control
              as="select"
              name="classMode"
              value={formData.classMode}
              onChange={handleChange}
              required
            >
              <option value="">Click and select class modes</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="both">Both</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formTeachingExperience">
            <Form.Control
              as="select"
              name="teachingExperience"
              value={formData.teachingExperience}
              onChange={handleChange}
              required
            >
              <option value="">Select teaching experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter a description"
              rows={3}
              required
            />
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

export default TutorRegistrationForm;