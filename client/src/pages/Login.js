import React, { useState } from 'react';
import '../styles/Common.css';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [otp, setOtp] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    // Call onLogin with user data if login is successful
    const userData = {
      // User data after successful login
    };
    onLogin(userData);
  };

  const handleSendOTP = () => {
    // Implement logic to send OTP
  };

  return (
    <div className='background-container proper-alignment'>
      <div className='container'>
        <div className="row">
          <div className="col-md-6">
            {/* Left Column */}
            {/* You can add content for the left column if needed */}
          </div>
          <div className="col-md-6">
            {/* Right Column */}
            <h2 className='text-dark text-center text-capitalize'>Login Tutors/Students</h2>
            <div className="form-group">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email id or Whatsapp Number"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                />
                <div className="input-group-append">
                  <button className="btn btn-danger p-3" onClick={handleSendOTP}>Send OTP</button>
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <div className="text-center"> {/* Add wrapper div for login button */}
                <button className="btn btn-primary p-3" onClick={handleLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;