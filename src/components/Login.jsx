import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Login.css';

const Login = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand text-pink fw-bold" href="/">ChocoLove</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <a className="nav-link" href="/home">Home</a>
              </li>
              <li className="nav-item"><a className="nav-link" href="/shop">Shop</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
              <li className="nav-item"><a className="nav-link active" href="/login">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Section */}
      <section className="login-section d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow login-card">
                <div className="card-body">
                  <h3 className="text-center text-pink mb-4">Welcome Back</h3>
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" className="form-control" placeholder="Enter your password" />
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-pink">Login</button>
                    </div>
                    <p className="text-center mt-3 text-muted">
                      Don't have an account? <a href="#" className="text-pink">Sign up</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
          <footer className="footer-pink text-dark pt-5 pb-3 mt-5">
  <div className="container">
    <div className="row">
      {/* Quick Links */}
      <div className="col-md-6 mb-4">
        <h5 className="text-uppercase">Quick Links</h5>
        <ul className="list-unstyled">
          <li><Link to="/home" className="text-dark text-decoration-none">Home</Link></li>
          <li><Link to="/shop" className="text-dark text-decoration-none">Shop</Link></li>
          <li><Link to="/about" className="text-dark text-decoration-none">About Us</Link></li>
          <li><Link to="/contact" className="text-dark text-decoration-none">Contact Us</Link></li>
          <li><Link to="/login" className="text-dark text-decoration-none">Login</Link></li>
        </ul>
      </div>

      {/* Follow Us */}
      <div className="col-md-6 mb-4">
        <h5 className="text-uppercase">Follow Us</h5>
        <p>Stay connected on our social media</p>
        <div className="d-flex gap-3">
          <a href="#" className="text-dark fs-5"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-dark fs-5"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-dark fs-5"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-dark fs-5"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>

    <hr className="border-dark" />
    <p className="text-center mb-0">&copy; 2025 ChocoLove. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
};

export default Login;