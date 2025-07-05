import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/HomePage.css';
import '../assets/Products.css';
import star from '../assets/images/str.jpg';
import d1 from '../assets/images/dark.jpg';
import car from '../assets/images/carm.jpg';
import aj from '../assets/images/alm.jpg';
import hbz from '../assets/images/loli.jpg';
import mag from '../assets/images/mint.webp';
import coco from '../assets/images/jellys.jpg';
import nuty from '../assets/images/round.webp';
const Products = () => {
 const chocolates = [
  { id: 1, name: 'Strawberry Delight', price: 120, img: star },
  { id: 2, name: 'Dark Crunch', price: 140, img: d1 },
  { id: 3, name: 'Caramel Swirl', price: 160, img: car },
  { id: 4, name: 'Almond Joy', price: 180, img: aj },
  { id: 5, name: 'LoliPops', price: 200, img: hbz },
  { id: 6, name: 'Mint Magic', price: 150, img: mag },
  { id: 7, name: 'Jellies', price: 170, img: coco },
  { id: 8, name: 'Candies', price: 190, img: nuty }
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
                <a className="nav-link" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/shop">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Products */}
      <div className="products-section">
      <div className="container">
        <h2 className="text-center text-pink mb-4">All Chocolates</h2>
        <div className="row">
          {chocolates.map(choco => (
            <div className="col-md-3 mb-4" key={choco.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={choco.img}
                  className="card-img-top"
                  alt={choco.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{choco.name}</h5>
                  <p className="card-text text-muted">₹{choco.price}</p>
                  <button className="btn  btn-pink w-100">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
   </div>
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

export default Products;