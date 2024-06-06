import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../styles/Common.css';
import '../styles/feedback.css';

function FeedbackForm() {
    const [name,
        setName] = useState('');
    const [email,
        setEmail] = useState('');
    const [message,
        setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to a backend server
        console.log('Feedback submitted:', {name, email, message});
        clearForm();
    };

    const clearForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='proper-alignment'>
            <Container className="mt-5 mb-5">
                <Row>
                    <Col lg={6} className="d-flex justify-content-center align-items-center">
                        {/* Empty left column */}
                    </Col>

                    <Col lg={6}>
                        <h3 className='mb-4 text-center text-capitalize text-white'>Feedback form</h3>
                        <Form onSubmit={handleSubmit} className="feedback-form">
                            <Form.Group controlId="formName">
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={handleNameChange}
                                    placeholder="Name"
                                    className="form-control"/>
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Control
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Email"
                                    className="form-control"/>
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={message}
                                    onChange={handleMessageChange}
                                    placeholder="Your Feedback"
                                    className="form-control"/>
                            </Form.Group>
                            <div className="d-flex justify-content-between mt-3">
                                <Button type="button" onClick={clearForm} className="btn-clear">
                                    Clear
                                </Button>
                                <Button type="submit" className="btn-submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FeedbackForm;
