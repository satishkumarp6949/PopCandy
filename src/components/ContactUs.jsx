import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/ContactUs.css';

const ContactUs = () => {
  return (
    <div>
     {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand text-pink fw-bold" href="#">ChocoLove</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Form */}
      <section className="contact-section py-5">
        <div className="container">
          <h2 className="text-center text-pink mb-4">Get In Touch</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="5" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="btn btn-pink w-100">Send Message</button>
              </form>
            </div>
            <div className="col-md-6">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799156851!2d77.35073162061194!3d28.612972972769708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdc399d5ab1f%3A0x886b92aa80b1a7df!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1628234567890!5m2!1sen!2sin"
                width="100%"
                height="340"
                style={{ border: '0', borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
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
          <li><a href="/home" className="text-dark text-decoration-none">Home</a></li>
          <li><a href="/shop" className="text-dark text-decoration-none">Shop</a></li>
          <li><a href="/about" className="text-dark text-decoration-none">About Us</a></li>
          <li><a href="/contact" className="text-dark text-decoration-none">Contact Us</a></li>
          <li><a href="/login" className="text-dark text-decoration-none">Login</a></li>
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

export default ContactUs;