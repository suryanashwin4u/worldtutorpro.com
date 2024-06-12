import React, { useState } from 'react';
import facebookIcon from '../images/login-icons/facebook-login.png';
import googleIcon from '../images/login-icons/google-login.png';
import instagramIcon from '../images/login-icons/instagram-login.png';
import linkedinIcon from '../images/login-icons/linkedin-login.png';
import '../styles/Common.css';
import '../styles/LoginRegister.css';

const Login = ({onLogin}) => {
    const [emailOrPhone,
        setEmailOrPhone] = useState('');
    const [otp,
        setOtp] = useState('');
    const [otpSent,
        setOtpSent] = useState(false); // Track whether OTP has been sent

    const handleLogin = () => {
        // Implement login logic here Call onLogin with user data if login is successful
        const userData = {
            // User data after successful login
        };
        onLogin(userData);
    };

    const handleSendOTP = () => {
        // Implement logic to send OTP Assuming OTP sending logic is asynchronous, set
        // otpSent to true after OTP is sent
        setOtpSent(true);
    };

    // Placeholder functions for social media login
    const handleGoogleLogin = () => {
        // Implement Google login logic
    };

    const handleFacebookLogin = () => {
        // Implement Facebook login logic
    };

    const handleLinkedInLogin = () => {
        // Implement LinkedIn login logic
    };

    const handleInstagramLogin = () => {
        // Implement Instagram login logic
    };

    return (
        <div className='proper-alignment'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-4 login-register-form">
                        <h2 className='mb-4 text-white text-center text-capitalize'>Login / Register</h2>
                        <div className="form-group">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email id or Whatsapp Number"
                                    value={emailOrPhone}
                                    onChange={(e) => setEmailOrPhone(e.target.value)}
                                    disabled={otpSent}/>
                            </div>
                            <input
                                type="text"
                                className="form-control mt-3"
                                placeholder="OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                disabled={!otpSent}/>
                            <div className="text-center mt-3 d-flex justify-content-between">
                                <button
                                    className="btn btn-danger p-3"
                                    onClick={handleSendOTP}
                                    disabled={otpSent}>
                                    Send OTP
                                </button>
                                <button
                                    className="btn btn-primary p-3"
                                    onClick={handleLogin}
                                    disabled={!otpSent}>
                                    Login
                                </button>
                            </div>
                            <div className="text-center mt-3">
                                {/* Social media login options */}
                                <p className='text-white'>OR</p>
                                <div className='d-flex justify-content-between'>
                                    <button
                                        className="btn btn-outline-primary mr-2 bg-white"
                                        onClick={handleFacebookLogin}>
                                        <img src={facebookIcon} alt="Facebook" className='resize-login-icons'/>
                                    </button>
                                    <button
                                        className="btn btn-outline-primary mr-2 bg-white"
                                        onClick={handleLinkedInLogin}>
                                        <img src={linkedinIcon} alt="LinkedIn" className='resize-login-icons'/>
                                    </button>
                                    <button
                                        className="btn btn-outline-primary bg-white"
                                        onClick={handleInstagramLogin}>
                                        <img src={instagramIcon} alt="Instagram" className='resize-login-icons'/>
                                    </button>
                                    <button
                                        className="btn btn-outline-danger mr-2 bg-white"
                                        onClick={handleGoogleLogin}>
                                        <img src={googleIcon} alt="Google" className='resize-login-icons'/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
