// src/Footer.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-bg text-black p-3 text-left">
      <Container>
        <Row>
          <Col md="4">
            <h5>About Us</h5>
            <p>
            IndiaTutorPro.Com is an online education portal that helps in connecting a student seeking home tutor and the teacher searching for a home tuition job. We are a growing family of almost 76000+ tutors and students who are happily enjoying the art of learning from a personalized tutor.
            </p>
          </Col>
          <Col md="4">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/tutor-registration">Tutor Registration</a></li>
              <li><a href="/student-registration">Student Registration</a></li>
            </ul>
          </Col>
          <Col md="4">
            <h5>Contact Us</h5>
            <p><b>Email:</b> SuryanAshwin4u@Gmail.Com </p>
            <p><b>Phone/WhatsApp:</b> +91-8076452716 </p>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <p className="text-center mt-4">
            <b>&copy; {new Date().getFullYear()} IndiaTutorPro.Com All Rights Reserved.</b>        
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
