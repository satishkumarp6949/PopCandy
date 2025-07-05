import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/AboutUs.css';
import shop from '../assets/images/candshop.jpg';
import p1 from '../assets/images/p2.jpg';
import p4 from '../assets/images/p3.jpg';
import p6 from '../assets/images/p5.jpg';
const AboutUs = () => {
  const funFacts = [
    { label: 'Happy Customers', value: '10K+' },
    { label: 'Types of Chocolates', value: '25+' },
    { label: 'Years of Experience', value: '5' },
    { label: 'Chocolates Sold', value: '1M+' },
  ];

  const team = [
    { name: 'John Wrick', role: 'Founder & Chocolatier', img: p1},
    { name: 'Roshan', role: 'Head of Sales', img: p4 },
    { name: 'Anjali Sharma', role: 'Creative Designer', img: p6 },
  ];

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

      {/* About Section */}
      <section className="about-section text-center">
        <div className="container">
          <h2 className="text-pink mb-4">Our Sweet Story</h2>
          <p className="lead mb-4">
            ChocoLove was born from a passion for all things chocolate. Our mission is to
            bring joy and sweetness into the lives of our customers with handmade, premium chocolates.
          </p>
          <img
            src={shop}
            alt="Our Shop"
            className="img-fluid rounded shadow about-image"
          />
          <p className="mt-4">
            From sourcing the finest cocoa to crafting unique flavors, every step is filled with love.
            We thank you for being a part of our delicious journey!
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-5 bg-light">
        <div className="container text-center">
          <h2 className="text-pink mb-4">Meet Our Team</h2>
          <div className="row">
            {team.map((member, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card team-card shadow-sm">
                  <img src={member.img} className="card-img-top team-img" alt={member.name} />
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text text-muted">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="fun-facts-section py-5">
        <div className="container text-center">
          <h2 className="text-pink mb-4">Sweet Numbers</h2>
          <div className="row">
            {funFacts.map((fact, idx) => (
              <div className="col-6 col-md-3 mb-4" key={idx}>
                <div className="fact-box shadow-sm p-3 rounded bg-white">
                  <h3 className="text-pink fw-bold">{fact.value}</h3>
                  <p className="text-muted mb-0">{fact.label}</p>
                </div>
              </div>
            ))}
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

export default AboutUs;