import React, { useState } from "react";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    // Check required fields
    if (
      !billingInfo.name ||
      !billingInfo.email ||
      !billingInfo.phone ||
      !billingInfo.address ||
      !billingInfo.city ||
      !billingInfo.zip
    ) {
      alert("Please fill out all billing details before placing your order.");
      return;
    }

    // Simulate order success
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      clearCart();
    }, 2500);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container text-center py-5">
        <h3 className="fw-bold mb-3">Your cart is empty</h3>
        <Link to="/products" className="btn btn-dark">
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="fw-bold text-center mb-4">Checkout</h2>

      <div className="row g-4">
        {/* Billing Info Section */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="fw-bold mb-3">Billing Information</h5>
              <form onSubmit={handleCheckout}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={billingInfo.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={billingInfo.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={billingInfo.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      value={billingInfo.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Street Address</label>
                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      value={billingInfo.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Postal / ZIP Code</label>
                    <input
                      type="text"
                      name="zip"
                      className="form-control"
                      value={billingInfo.zip}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <hr className="my-4" />
                <h5 className="fw-bold mb-3">Items in Your Order</h5>

                <ul className="list-group list-group-flush">
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          width="60"
                          height="60"
                          className="rounded me-3 border"
                          style={{ objectFit: "contain" }}
                        />
                        <div>
                          <h6 className="mb-1">{item.name}</h6>
                          <small className="text-muted">
                            {item.quantity} × ${item.price.toFixed(2)}
                          </small>
                        </div>
                      </div>
                      <span className="fw-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="submit"
                  className="btn btn-success w-100 mt-4 fw-semibold"
                >
                  <i className="bi bi-check-circle me-2"></i>Place Order
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm sticky-top">
            <div className="card-body">
              <h5 className="fw-bold mb-3">Order Summary</h5>

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span className="text-success">Free</span>
              </div>

              <hr />
              <div className="d-flex justify-content-between fw-bold mb-3">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="text-center mt-3">
                <Link to="/products" className="text-decoration-none text-dark">
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Success Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow">
              <div className="modal-body text-center p-5">
                <i className="bi bi-check-circle text-success display-3 mb-3"></i>
                <h4 className="fw-bold mb-2">Order Placed Successfully!</h4>
                <p className="text-muted mb-1">
                  Thank you, <strong>{billingInfo.name}</strong>.
                </p>
                <p className="text-muted small">
                  A confirmation email has been sent to{" "}
                  <strong>{billingInfo.email}</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
