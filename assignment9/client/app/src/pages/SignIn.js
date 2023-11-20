import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFaliureAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const totalFields = 2; // Email, Password

  const validateEmail = (updatedEmail) => {
    const isValid = /^.*@northeastern\.edu$/.test(updatedEmail);
    setEmailValid(isValid);
    return isValid;
  };

  const validatePassword = (updatedPassword) => {
    const isValid = /^(?=.*[A-Z])(?=.*[\W_])(?=.{8,20}$).*/.test(
      updatedPassword
    );
    setPasswordValid(isValid);
    return isValid;
  };

  const validateForm = async () => {
    if (emailValid && passwordValid) {

      try {
        const url = "http://localhost:8000/auth/login";
        const res = await axios.post(url, {email: email, password: password});
        console.log(res)
        localStorage.setItem("token", res.data.token);
        setShowSuccessAlert(true);
        window.location = "/home";
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
          setShowFaliureAlert(true);
          resetForm();
        }
      }      

      setTimeout(() => {
        setShowSuccessAlert(false);
        setShowFaliureAlert(false);
        // Redirect or perform other actions after successful sign-in
      }, 2000);

      resetForm();
    }
  };

  const updateProgressBar = () => {
    const validFields = [emailValid, passwordValid].filter(
      (valid) => valid
    ).length;
    const progress = (validFields / totalFields) * 100;
    return `${progress}%`;
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setEmailValid(null);
    setPasswordValid(null);
  };

  const showSpinner = () => {
    setLoading(true);
  };

  const hideSpinner = () => {
    setLoading(false);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    showSpinner();

    setTimeout(() => {
      validateForm();
      hideSpinner();
    }, 500);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <strong>Sign In: Jobify</strong>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      emailValid
                        ? "is-valid"
                        : emailValid === false
                        ? "is-invalid"
                        : ""
                    }`}
                    id="email"
                    required
                    autoComplete="off"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateEmail(e.target.value); // Call validateEmail on input change
                    }}
                  />

                  <div
                    id="emailHelpBlock"
                    className="form-text"
                    style={{ display: emailValid === false ? "block" : "none" }}
                  >
                    Please enter a valid @northeastern.edu email address.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      passwordValid
                        ? "is-valid"
                        : passwordValid === false
                        ? "is-invalid"
                        : ""
                    }`}
                    id="password"
                    required
                    autoComplete="off"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      validatePassword(e.target.value); // Call validatePassword on input change
                    }}
                  />
                  <div
                    id="passwordHelpBlock"
                    className="form-text"
                    style={{
                      display: passwordValid === false ? "block" : "none",
                    }}
                  >
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
                  </div>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: updateProgressBar() }}
                  ></div>
                </div>
                <br />

                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={!emailValid || !passwordValid || loading}
                  >
                    Sign In
                    {loading && (
                      <div
                        className="spinner-border spinner-border-sm ms-2"
                        role="status"
                      ></div>
                    )}
                  </button>
                </div>

                <div
                  className="alert alert-success"
                  role="alert"
                  style={{ display: showSuccessAlert ? "block" : "none" }}
                >
                  Thank you for signing in!
                </div>

                <div
                  className="alert alert-danger"
                  role="alert"
                  style={{ display: showFailureAlert ? "block" : "none" }}
                >
                  Incorrect Credentials
                </div>
                
              </form>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
