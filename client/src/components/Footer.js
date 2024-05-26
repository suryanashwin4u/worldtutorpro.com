// src/Footer.js
import React from 'react';
import facebookIcon from '../images/facebook-icon.svg'; // Assuming you have a Facebook icon image
import gmailIcon from '../images/gmail-icon.svg';
import linkedinIcon from '../images/linkedin-icon.svg'; // Assuming you have a LinkedIn icon image
import phoneIcon from '../images/phone-icon.svg';
import whatsappIcon from '../images/whatsapp-icon.svg';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-bg text-black p-3 text-left d-flex fixed-bottom">
      <div className='container d-flex justify-content-between align-items-center'>

      <div className='d-flex'>
        <strong>&copy; {new Date().getFullYear()} IndiaTutorPro.Com &nbsp;</strong> All Rights Reserved.
      </div>
      <div className='d-flex'>
        <a href="tel:+918076452716" className="phone-link" title='+91-8076452716'>
          <img src={phoneIcon} alt="Phone" className="phone-icon" /> 
        </a>
        <a href="mailto:suryanashwin4u@gmail.com" className="email-link" title='suryanashwin4u@gmail.com'>
          <img src={gmailIcon} alt="Gmail" className="contact-icon" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=8076452716" target="_blank" rel="noopener noreferrer" className="whatsapp-link" title='+91-8076452716, +91-8285057682'>
          <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" /> 
        </a>
        <a href="https://www.linkedin.com/in/suryanashwin4u/" target="_blank" rel="noopener noreferrer" className="linkedin-link" title='www.linkedin.com/in/suryanashwin4u/'>
          <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" /> 
        </a>
        <a href="https://www.facebook.com/ashwani.upsc.psc" target="_blank" rel="noopener noreferrer" className="facebook-link" title='www.facebook.com/ashwani.upsc.psc'>
          <img src={facebookIcon} alt="Facebook" className="facebook-icon" /> 
        </a>
      </div>
      </div>
    </footer>  
  );
};

export default Footer;
