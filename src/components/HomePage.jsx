import React from 'react';
import '../assets/HomePage.css';
import hom from '../assets/images/home.jpg';

// Import your chocolate images
import ch1 from '../assets/images/choco1.jpg';
import ch2 from '../assets/images/choc2.jpg';
import ch3 from '../assets/images/cho3.jpg';
import ch4 from '../assets/images/darkcan.jpg';

const HomePage = () => {
  const products = [
    {
      name: 'Hersheys',
      price: 150,
      img: ch1,
    },
    {
      name: 'Jelly Candies',
      price: 170,
      img: ch2,
    },
    {
      name: 'Needle Candies',
      price: 190,
      img: ch3,
    },
    {
      name: 'Dark Bites',
      price: 210,
      img: ch4,
    },
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

      {/* Hero Section */}
      <div className="text-center py-5 hero-section">
        <div className="container">
          <h1 className="mb-3">Delicious Handmade Chocolates</h1>
          <p className="lead mb-4">Made with love and premium ingredients</p>
          <a href="#" className="btn btn-lg btn-pink">Shop Now</a>
          <div className="mt-5">
            <img
              src={hom}
              alt="Chocolates"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-pink mb-4">Our Best Sellers</h2>
          <div className="row">
            {products.map((product, i) => (
              <div className="col-md-3 mb-4" key={i}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.img}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-muted">₹{product.price}</p>
                    <div className="mb-2">
                      {Array(5)
                        .fill()
                        .map((_, star) => (
                          <i
                            key={star}
                            className={`fa ${star < 4 ? 'fa-star' : 'fa-star-o'} text-warning me-1`}
                          ></i>
                        ))}
                    </div>
                    <button className="btn btn-pink w-100">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <a href="#" className="btn btn-pink">View More</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 text-pink">What Our Customers Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <p>"Absolutely delicious! The dark chocolate is my favorite!"</p>
                <h6 className="text-end">– Priya R.</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <p>"Beautifully packaged and delivered quickly. Perfect gift!"</p>
                <h6 className="text-end">– Arjun M.</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <p>"My kids loved the strawberry chocolates. Highly recommend!"</p>
                <h6 className="text-end">– Sneha K.</h6>
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

export default HomePage;