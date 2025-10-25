import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-3 mt-5 border-top">
      <div className="container">
        <div className="row gy-4">
         
          <div className="col-md-4">
            <h3 className="fw-bold mb-3" style={{ letterSpacing: "2px" }}>
              BLUSHIFY
            </h3>
            <p className="text-muted">
              Beauty inspired by real life — crafted with clean, non-toxic
              ingredients that make you feel confident in your own skin.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-dark fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-dark fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-dark fs-5">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-dark fs-5">
                <i className="bi bi-pinterest"></i>
              </a>
            </div>
          </div>

          <div className="col-md-2">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Home</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Shop</a></li>
              <li><a href="#" className="text-muted text-decoration-none">About</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Customer Care</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Shipping Info</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Returns & Refunds</a></li>
              <li><a href="#" className="text-muted text-decoration-none">FAQs</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Support</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="fw-bold mb-3">Join Our Newsletter</h6>
            <p className="text-muted small">
              Subscribe for exclusive deals and new arrivals.
            </p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
              />
              <button className="btn btn-dark" type="submit">
                <i className="bi bi-send"></i>
              </button>
            </form>
          </div>
        </div>

        <hr className="my-4" />

        <div className="text-center small text-muted">
          © {new Date().getFullYear()} <strong>Blushify</strong>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
