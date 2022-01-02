import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Navigation.css';
const Navigation = () => {
  return (
    <div className='header-bg'>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <div className="d-flex">
              <div className="header-logo">
                <img src={logo} className='img-fluid w-50' alt="" />
              </div>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation nava-icon">
              {/* <span className="navbar-toggler-icon"></span> */}
              <i className="fas fa-bars navbar-toggler-icon"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <Link to="/" className="nav-link text-black">Create Blog</Link>
                <Link to="/login" className="nav-link text-black">Login</Link>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;