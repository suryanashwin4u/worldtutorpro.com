// src/components/Header.js
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import '../styles/Header.css';

const Header = () => {
  return (
    <Navbar className="navbar-orange" variant="dark">
      <Container>
        <Navbar.Brand href="/" className='nav-brand'>IndiaTutorPro.Com</Navbar.Brand>
        <Nav className="me-auto">
          <Button variant="outline-light" href="/tutor-registration" className="nav-button">
            Tutors Registration Form
          </Button>
          <Button variant="outline-light" href="/student-registration" className="nav-button">
            Students Registration Form
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
