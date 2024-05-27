// src/components/TutorRegistrationForm.js
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/TutorRegistrationForm.css';

const TutorRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    preferredCityAreas: '',
    phoneNumber: '',
    whatsappNumber: '',
    emailId: '',
    language: '',
    teachingExperience: '',
    education: '',
    university: '',
    subjects: '',
    classes: '',
    classMode: '',
    description: '',
    photo: '',
    idProofFile: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
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
      address: '',
      city: '',
      state: '',
      pinCode: '',
      preferredCityAreas: '',
      phoneNumber: '',
      whatsappNumber: '',
      emailId: '',
      language: '',
      teachingExperience: '',
      education: '',
      university: '',
      subjects: '',
      classes: '',
      classMode: '',
      description: '',
      photo: '',
      idProofFile: ''
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
    <Form onSubmit={handleSubmit} >
      {currentStep === 1 && (
        <>
          <Form.Group className="mb-3" controlId="formName" >
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGender">
            <Form.Control
              as="select"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCity">
            <Form.Control
              as="select"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Select City"
              required
            >
              <option value="">City</option>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
              {/* Add more cities as needed */}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formState">
            <Form.Control
              as="select"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Select State"
              required
            >
              <option value="">State</option>
              <option value="state1">State 1</option>
              <option value="state2">State 2</option>
              {/* Add more states as needed */}
            </Form.Control>
          </Form.Group>
        </>
      )}

      {currentStep === 2 && (
        <>
          <Form.Group className="mb-3" controlId="formPinCode">
            <Form.Control
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              placeholder="Pin Code"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPreferredCityAreas">
            <Form.Control
              type="text"
              name="preferredCityAreas"
              value={formData.preferredCityAreas}
              onChange={handleChange}
              placeholder="Preferred Areas"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPhoneNumber">
            <Form.Control
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formWhatsappNumber">
            <Form.Control
              type="text"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              placeholder="WhatsApp Number"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmailId">
            <Form.Control
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              placeholder="Email ID"
              required
            />
          </Form.Group>
        </>
      )}

      {currentStep === 3 && (
        <>
          <Form.Group className="mb-3" controlId="formLanguage">
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
          <Form.Group className="mb-3" controlId="formEducation">
            <Form.Control
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="Highest Qualification"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formUniversity">
            <Form.Control
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
              placeholder="University/School/College Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTeachingExperience">
            <Form.Control
              as="select"
              name="teachingExperience"
              value={formData.teachingExperience}
              onChange={handleChange}
              required
            >
              <option value="">Select Teaching Experience</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </Form.Control>
          </Form.Group>
        </>
      )}

      {currentStep === 4 && (
        <>
          <Form.Group className="mb-3" controlId="formSubjects">
            <Form.Control
              as="select"
              name="subjects"
              value={formData.subjects}
              onChange={handleChange}
              required
            >
              <option value="">Select Subjects Expertise</option>
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="english">English</option>
              {/* Add other subjects as needed */}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formClasses">
            <Form.Control
              as="select"
              name="classes"
              value={formData.classes}
              onChange={handleChange}
              required
            >
              <option value="">Select Classes Expertise</option>
              <option value="class 1">class 1</option>
              {/* Add other subjects as needed */}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formClassMode">
            <Form.Control
              as="select"
              name="classMode"
              value={formData.classMode}
              onChange={handleChange}
              required
            >
              <option value="">Select Class Modes</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="both">Both</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Control
              as="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write Something About You..."
              rows={3}
              required
            />
          </Form.Group>
        </>
      )}

      {currentStep === 5 && (
        <>
          <Form.Group className="mb-3" controlId="formPhoto">
            <Form.Label>Upload Photo (Only JPG Allowed)</Form.Label>
            <Form.Control
              type="file"
              name="photo"
              onChange={handleFileChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formIdProofFile">
            <Form.Label>Upload ID Proof (Only JPG Allowed)</Form.Label>
            <Form.Control
              type="file"
              name="idProofFile"
              onChange={handleFileChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEducationProofFile">
            <Form.Label>Upload Highest Education Proof (Only JPG Allowed)</Form.Label>
            <Form.Control
              type="file"
              name="educationProof"
              onChange={handleFileChange}
              required
            />
          </Form.Group>
        </>
      )}

      <Row className="mt-4">
        <Col>
          <Button variant="danger" onClick={handleClear} className="mr-2">
            Clear
          </Button>
        </Col>
        <Col className="text-right button-container">
          {currentStep > 1 && (
            <Button variant="secondary" onClick={prevStep}>
              Previous
            </Button>
          )}
          {currentStep < 5 ? (
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
