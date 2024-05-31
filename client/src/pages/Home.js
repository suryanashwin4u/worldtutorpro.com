// src/pages/Home.js
import React, { useState } from 'react';
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Row
} from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import '../styles/Common.css';
import '../styles/Home.css';

const Home = () => {
    const [userType,
        setUserType] = useState('');
    const [location,
        setLocation] = useState('');
    const [classCategory,
        setClassCategory] = useState('');
    const [subjectCategory,
        setSubjectCategory] = useState('');

    const teachers = [
        {
            id: 1,
            name: 'John Doe',
            photo: 'path_to_photo_1', // replace with actual photo path or URL
            rating: 4.5,
            subjects: ['Math', 'Science']
        }, {
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
        }, {
            id: 2,
            name: 'Bob Brown',
            photo: 'path_to_student_photo_2', // replace with actual photo path or URL
            location: 'San Francisco',
            subjects: ['English', 'History']
        },
        // Add more students as needed
    ];

    const popularSubjects = [
        {
            id: 1,
            name: 'Math',
            icon: 'path_to_icon_math',
            color: 'white'
        }, {
            id: 2,
            name: 'Science',
            icon: 'path_to_icon_science',
            color: 'white'
        }, {
            id: 3,
            name: 'English',
            icon: 'path_to_icon_english',
            color: 'white'
        }, {
            id: 4,
            name: 'History',
            icon: 'path_to_icon_history',
            color: 'white'
        }
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
        console.log('Search:', {userType, location, classCategory, subjectCategory});
    };

    return (
        <Container className="container-styling">
            <div className="text-dark text-center text-capitalize">
                <h4 className='mt-4'>Find students and tutors for online/offline/home tuitions
                    classes at affordable rates near your location</h4>
            </div>

            <div className="form-container">
                <Form.Group controlId="formUserType" className='styling-selectors'>
                    <Form.Select value={userType} onChange={(e) => setUserType(e.target.value)}>
                        <option value="">Select User Type</option>
                        <option value="student">Student</option>
                        <option value="tutor">Tutor</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="formClassCategory" className='styling-selectors'>
                    <Form.Select
                        value={classCategory}
                        onChange={(e) => setClassCategory(e.target.value)}>
                        <option value="">Select Class Category</option>
                        <option value="primary">Primary</option>
                        <option value="secondary">Secondary</option>
                        <option value="higher-secondary">Higher Secondary</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="formSubjectCategory" className='styling-selectors'>
                    <Form.Select
                        value={subjectCategory}
                        onChange={(e) => setSubjectCategory(e.target.value)}>
                        <option value="">Select Subject Category</option>
                        <option value="math">Math</option>
                        <option value="science">Science</option>
                        <option value="english">English</option>
                        <option value="history">History</option>
                        {/* Add more subjects as needed */}
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="formLocation" className='styling-selectors'>
                    <Form.Select value={location} onChange={(e) => setLocation(e.target.value)}>
                        <option value="">Select Location</option>
                        {/* Add more subjects as needed */}
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" onClick={handleSearch} className='styling-selectors'>Find</Button>
            </div>

            <section className="mb-4 text-center text-capitalize adding-style">
                <h5>Top Tutors Near Your Location</h5>
                <Slider {...sliderSettings}>
                    {teachers.map(teacher => (
                        <div key={teacher.id}>
                            <Card>
                                <Card.Img variant="top" src={teacher.photo} alt={teacher.name}/>
                                <Card.Body>
                                    <Card.Title>{teacher.name}</Card.Title>
                                    <Card.Text>Rating: {teacher.rating}
                                        / 5</Card.Text>
                                    <Card.Text>Subjects: {teacher
                                            .subjects
                                            .join(', ')}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </section>

            <section className="mb-4 text-center text-capitalize adding-style">
                <h5>Active Students looking for you in Your Location</h5>
                <Slider {...sliderSettings}>
                    {studentsLookingForTutors.map(student => (
                        <div key={student.id}>
                            <Card>
                                <Card.Img variant="top" src={student.photo} alt={student.name}/>
                                <Card.Body>
                                    <Card.Title>{student.name}</Card.Title>
                                    <Card.Text>Location: {student.location}</Card.Text>
                                    <Card.Text>Subjects: {student
                                            .subjects
                                            .join(', ')}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </section>

            <section className="mb-4 text-center text-capitalize adding-style">
                <h5>tutions by subjects</h5>
                <Row>
                    {popularSubjects.map(subject => (
                        <Col key={subject.id} xs={6} md={4} lg={3} className="box-styling">
                            <div className="subject-box">
                                <img src={subject.icon} alt={subject.name} className="subject-icon"/>
                                <p className="subject-name">{subject.name}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="mb-4 text-center text-capitalize adding-style">
                <h5>tution by cities</h5>
                <Row>
                    {popularSubjects.map(subject => (
                        <Col key={subject.id} xs={6} md={4} lg={3} className="box-styling">
                            <div className="subject-box">
                                <img src={subject.icon} alt={subject.name} className="subject-icon"/>
                                <p className="subject-name">{subject.name}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="mb-4 text-center text-capitalize adding-style">
                <h5>tutions by category</h5>
                <Row>
                    {popularSubjects.map(subject => (
                        <Col key={subject.id} xs={6} md={4} lg={3} className="box-styling">
                            <div className="subject-box">
                                <img src={subject.icon} alt={subject.name} className="subject-icon"/>
                                <p className="subject-name">{subject.name}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="mb-4 text-center text-capitalize adding-style">
                <h5>tutions by classes</h5>
                <Row>
                    {popularSubjects.map(subject => (
                        <Col key={subject.id} xs={6} md={4} lg={3} className="box-styling">
                            <div className="subject-box">
                                <img src={subject.icon} alt={subject.name} className="subject-icon"/>
                                <p className="subject-name">{subject.name}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>

            <section className="mb-4 text-center text-capitalize adding-style">
                <h5>other tuitions</h5>
                <Row>
                    {popularSubjects.map(subject => (
                        <Col key={subject.id} xs={6} md={4} lg={3} className="box-styling">
                            <div className="subject-box">
                                <img src={subject.icon} alt={subject.name} className="subject-icon"/>
                                <p className="subject-name">{subject.name}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>

        </Container>
    );
};

export default Home;
