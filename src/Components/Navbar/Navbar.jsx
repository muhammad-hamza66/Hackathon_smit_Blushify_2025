import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <div>
      <nav className="navbar navbar-expand-lg py-3 justify-content-between align-items-center w-100 nav-wrapper fixed-top bg-white shadow-sm">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a href="#" className="navbar-brand mx-auto order-0 d-lg-none d-flex">
          <h2 className="m-0 fw-bold" style={{ letterSpacing: "2px" }}>
            BLUSHIFY
          </h2>
        </a>

        <ul className="d-lg-none d-flex align-items-center gap-3">
          <li className="nav-item">
            <a href="#">
              <i className="bi bi-search fs-5 text-dark"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" data-bs-toggle="modal" data-bs-target="#signupModal">
              <i className="bi bi-person fs-5 text-dark"></i>
            </a>
          </li>
          <li className="nav-item position-relative">
            <a href="#">
              <i className="bi bi-heart fs-5 text-dark"></i>
              <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">
                0
              </span>
            </a>
          </li>

          <li className="nav-item position-relative">
            <Link to="/cart">
              <i className="bi bi-bag fs-5 text-dark"></i>
              <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">
                {cartCount}
              </span>
            </Link>
          </li>
        </ul>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav nav-menu align-items-center gap-4">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Store
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>

          <a href="#" className="navbar-brand mx-auto d-none d-lg-flex">
            <h2 className="m-0 fw-bold" style={{ letterSpacing: "2px" }}>
              BLUSHIFY
            </h2>
          </a>
          <ul className="navbar-nav d-none d-lg-flex align-items-center gap-4 ms-auto">
            <li className="nav-item">
              <a href="#">
                <i className="bi bi-search fs-5 text-dark"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" data-bs-toggle="modal" data-bs-target="#signupModal">
                <i className="bi bi-person fs-5 text-dark"></i>
              </a>
            </li>
            <li className="nav-item position-relative">
              <a href="#">
                <i className="bi bi-heart fs-5 text-dark"></i>
                <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">
                  0
                </span>
              </a>
            </li>
            <li className="nav-item position-relative">
              <Link to="/cart">
                <i className="bi bi-bag fs-5 text-dark"></i>
                <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">
                  {cartCount}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold" id="signupModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <p className="text-muted small">
                  By signing up, you agree to our{" "}
                  <a href="#" className="text-success text-decoration-none">
                    Terms
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-success text-decoration-none">
                    Privacy Policy
                  </a>
                </p>

                <button type="button" className="btn btn-dark w-100">
                  Sign Up
                </button>
              </form>

              <div className="text-center mt-3">
                <p>
                  Already have an account?{" "}
                  <a href="#" className="text-success fw-bold">
                    Sign In
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
