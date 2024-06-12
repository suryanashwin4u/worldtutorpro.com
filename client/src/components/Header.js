import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const isDisabled = false; // Set this conditionally based on your requirements

  return (
    <header>
      <div className="header-section-1">
        <Navbar.Brand href="/" className="nav-brand text-dark text-center text-capitalize">Welcome to WorldTutorPro.com</Navbar.Brand>
      </div>
      <div className="header-section-2">
        <Navbar className="navbar-orange" variant="white">
          <Container>
            <Nav className="me-auto">
              <NavLink to="/" exact className="nav-link" activeClassName="active-nav-link">
                Home
              </NavLink>
              <NavLink to="/tutor-student-registration" className="nav-link" activeClassName="active-nav-link">
                Tutor / Student Registration
              </NavLink>
              <NavLink to="/tutors-students-list" className="nav-link" activeClassName="active-nav-link">
                Tutors / Students List
              </NavLink>
              <NavLink to="/free-classes" className={`nav-link ${isDisabled ? 'disabled-link' : ''}`} activeClassName="active-nav-link">
                Free Classes
              </NavLink>
              <NavLink to="/ask-answer" className={`nav-link ${isDisabled ? 'disabled-link' : ''}`} activeClassName="active-nav-link">
                Ask & Answer
              </NavLink>
              <NavLink to="/blogs" className={`nav-link ${isDisabled ? 'disabled-link' : ''}`} activeClassName="active-nav-link">
                Blogs
              </NavLink>
              <NavLink to="/feedback" className="nav-link" activeClassName="active-nav-link">
                Feedback
              </NavLink>
              <NavLink to="/donate-us" className="nav-link" activeClassName="active-nav-link">
                Donate Us
              </NavLink>
              <NavLink to="/login-register" className={`nav-link ${isDisabled ? 'disabled-link' : ''}`} activeClassName="active-nav-link">
                Login / Register
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
