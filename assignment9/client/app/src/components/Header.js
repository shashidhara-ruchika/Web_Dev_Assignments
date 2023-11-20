import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          Jobify
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="/home">
              Home
            </a>
            <a className="nav-link" href="/jobs">
              Jobs
            </a>
            <a className="nav-link" href="/about">
              About Us
            </a>
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </div>

          <div className="navbar-nav ms-auto">
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
