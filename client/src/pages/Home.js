// src/pages/Home.js
import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import '../styles/Home.css';



const Home = () => {
  const [userType, setUserType] = useState('');
  const [location, setLocation] = useState('');
  const [classCategory, setClassCategory] = useState('');
  const [subjectCategory, setSubjectCategory] = useState('');

  const teachers = [
    {
      id: 1,
      name: 'John Doe',
      photo: 'path_to_photo_1', // replace with actual photo path or URL
      rating: 4.5,
      subjects: ['Math', 'Science']
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo: 'path_to_photo_2', // replace with actual photo path or URL
      rating: 4.7,
      subjects: ['English', 'History']
    },
    // Add more teachers as needed
  ];

  const studentsLookingForTutors = [
    {
      id: 1,
      name: 'Alice Johnson',
      photo: 'path_to_student_photo_1', // replace with actual photo path or URL
      location: 'New York',
      subjects: ['Math', 'Science']
    },
    {
      id: 2,
      name: 'Bob Brown',
      photo: 'path_to_student_photo_2', // replace with actual photo path or URL
      location: 'San Francisco',
      subjects: ['English', 'History']
    },
    // Add more students as needed
  ];

  const popularSubjects = [
    { id: 1, name: 'Math', icon: 'path_to_icon_math', color: '#ff5733' },
    { id: 2, name: 'Science', icon: 'path_to_icon_science', color: '#33ff57' },
    { id: 3, name: 'English', icon: 'path_to_icon_english', color: '#3357ff' },
    { id: 4, name: 'History', icon: 'path_to_icon_history', color: '#ff33a6' },
    { id: 5, name: 'Geography', icon: 'path_to_icon_geography', color: '#a633ff' },
    { id: 6, name: 'Physics', icon: 'path_to_icon_physics', color: '#33ffa6' },
    { id: 7, name: 'Chemistry', icon: 'path_to_icon_chemistry', color: '#ffa633' },
    { id: 8, name: 'Biology', icon: 'path_to_icon_biology', color: '#33a6ff' },
    { id: 9, name: 'Computer Science', icon: 'path_to_icon_computerscience', color: '#ff3366' },
    { id: 10, name: 'Economics', icon: 'path_to_icon_economics', color: '#3366ff' },
    { id: 11, name: 'Art', icon: 'path_to_icon_art', color: '#66ff33' },
    { id: 12, name: 'Music', icon: 'path_to_icon_music', color: '#ff33ff' }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  const handleSearch = () => {
    // Implement search functionality
    console.log('Search:', { userType, location, classCategory, subjectCategory });
  };

  return (
    <div className="banner">
      <div className="text-white text-center text-capitalize">
        <Container>
          <h1>Welcome to IndiaTutorPro.com</h1>
          <p>Find students and tutors for online/offline/home tuitions classes at affordable rates near your location</p>
        </Container>
      </div>
      
      <Container className="mt-5">
        <div className="form-container">
          <Form.Group controlId="formUserType">
            <Form.Select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="">Select User Type</option>
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formLocation">
            {/* <GooglePlacesAutocomplete
              apiKey="YOUR_API_KEY"
              selectProps={{
                location,
                onChange: setLocation,
                placeholder: 'Enter location',
              }}
            /> */}
          </Form.Group>

          <Form.Group controlId="formClassCategory">
            <Form.Select
              value={classCategory}
              onChange={(e) => setClassCategory(e.target.value)}
            >
              <option value="">Select Class Category</option>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="higher-secondary">Higher Secondary</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formSubjectCategory">
            <Form.Select
              value={subjectCategory}
              onChange={(e) => setSubjectCategory(e.target.value)}
            >
              <option value="">Select Subject Category</option>
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="english">English</option>
              <option value="history">History</option>
              {/* Add more subjects as needed */}
            </Form.Select>
          </Form.Group>

          <Button variant="primary" onClick={handleSearch}>Find</Button>
        </div>

        <section className="mb-5 text-center text-capitalize">
          <h2>Top Tutors in Your Location</h2>
          <Slider {...sliderSettings}>
            {teachers.map(teacher => (
              <div key={teacher.id}>
                <Card>
                  <Card.Img variant="top" src={teacher.photo} alt={teacher.name} />
                  <Card.Body>
                    <Card.Title>{teacher.name}</Card.Title>
                    <Card.Text>Rating: {teacher.rating} / 5</Card.Text>
                    <Card.Text>Subjects: {teacher.subjects.join(', ')}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </section>

        <section className="mb-5 text-center text-capitalize">
          <h2>Active Students in Your Location</h2>
          <Slider {...sliderSettings}>
            {studentsLookingForTutors.map(student => (
              <div key={student.id}>
                <Card>
                  <Card.Img variant="top" src={student.photo} alt={student.name} />
                  <Card.Body>
                    <Card.Title>{student.name}</Card.Title>
                    <Card.Text>Location: {student.location}</Card.Text>
                    <Card.Text>Subjects: {student.subjects.join(', ')}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </section>

        <section className="mb-5 text-center text-capitalize">
          <h2>tutors by subjects</h2>
          <Row>
            {popularSubjects.map(subject => (
              <Col key={subject.id} xs={6} md={4} lg={3} className="mb-4">
                <div className="subject-box" style={{ backgroundColor: subject.color }}>
                  <img src={subject.icon} alt={subject.name} className="subject-icon" />
                  <p className="subject-name">{subject.name}</p>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Home;
