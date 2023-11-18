import React, { useState } from 'react';
import '../css/signin.css';


const SignInComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(null); // Set to null initially
  const [passwordValid, setPasswordValid] = useState(null); // Set to null initially
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const totalFields = 2; // Email, Password

  const validateEmail = () => {
    const isValid = /^.*@northeastern\.edu$/.test(email);
    setEmailValid(isValid);
    updateProgressBar();
  };

  const validatePassword = () => {
    const isValid = /^(?=.*[A-Z])(?=.*[\W_])(?=.{8,20}$).*/.test(password);
    setPasswordValid(isValid);
    updateProgressBar();
  };

  const updateProgressBar = () => {
    const validFields = [emailValid, passwordValid].filter((value) => value !== null && value !== undefined).length;
    const progress = (validFields / totalFields) * 100;
    setProgress(progress);
  };

  const validateForm = () => {
    if (emailValid && passwordValid) {
      setShowSuccessAlert(true);

      setTimeout(() => {
        setShowSuccessAlert(false);
      }, 1000);

      setEmail('');
      setPassword('');
      setEmailValid(null); // Reset to null
      setPasswordValid(null); // Reset to null
      setProgress(0);
    }
  };

  const showSpinner = () => {
    setLoading(true);
  };

  const hideSpinner = () => {
    setLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    showSpinner();

    setTimeout(() => {
      validateEmail();
      validatePassword();
      validateForm();
      hideSpinner();
    }, 500);
  };

  return (
    <>
    <div className="container mt-4 d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header text-center">Sign In: Jobify</div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${emailValid === true ? 'is-valid' : emailValid === false ? 'is-invalid' : ''}`}
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="off"
                />
                <div id="emailHelpBlock" className="form-text" style={{ display: emailValid === false ? 'block' : 'none' }}>
                  Please enter a valid @northeastern.edu email address.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${passwordValid === true ? 'is-valid' : passwordValid === false ? 'is-invalid' : ''}`}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="off"
                />
                <div id="passwordHelpBlock" className="form-text" style={{ display: passwordValid === false ? 'block' : 'none' }}>
                  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
              </div>
              <br />
              <div className="mb-3">
                <button type="submit" className="btn btn-primary" id="signInButton">
                  Sign In
                  <div id="loading-spinner" className={`spinner-border spinner-border-sm ms-2 ${loading ? 'visible' : 'invisible'}`} role="status"></div>
                </button>
              </div>
              <div className="alert alert-success" role="alert" style={{ display: showSuccessAlert ? 'block' : 'none' }}>
                Thank you for signing in!
              </div>
            </form>
          </div>
        </div>
        <br />
      </div>
    </div>
    
    </>
  );
};

export default SignInComponent;
