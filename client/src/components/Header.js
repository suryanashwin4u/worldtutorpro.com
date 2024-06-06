import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const isDisabled = true; // Set this conditionally based on your requirements

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
              <NavLink to="/tutor-registration" className="nav-link" activeClassName="active-nav-link">
                Tutors Registration Form
              </NavLink>
              <NavLink to="/student-registration" className="nav-link" activeClassName="active-nav-link">
                Students Registration Form
              </NavLink>
              <NavLink to="/tutors-list" className="nav-link" activeClassName="active-nav-link">
                Tutors List
              </NavLink>
              <NavLink to="/students-list" className="nav-link" activeClassName="active-nav-link">
                Students List
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
              <NavLink to="/login" className={`nav-link ${isDisabled ? 'disabled-link' : ''}`} activeClassName="active-nav-link">
                Login
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
