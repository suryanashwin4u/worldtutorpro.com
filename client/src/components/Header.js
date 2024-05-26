// src/components/Header.js
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import '../styles/Header.css';

const Header = () => {
  return (
    <Navbar className="navbar-orange" variant="wbite" fixed="top">
      <Container>
        <Navbar.Brand href="/" className='nav-brand'>IndiaTutorPro.com</Navbar.Brand>
        <Nav className="me-auto">
          <Button variant="outline-dark" href="/" className="nav-button">
            Home
          </Button>
          <Button variant="outline-dark" href="/tutor-registration" className="nav-button">
            Tutors Registration Form
          </Button>
          <Button variant="outline-dark" href="/student-registration" className="nav-button">
            Students Registration Form
          </Button>
          <Button variant="outline-dark" href="/tutors-list" className="nav-button">
            Tutors List
          </Button>
          <Button variant="outline-dark" href="/students-list" className="nav-button">
            Students List
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
