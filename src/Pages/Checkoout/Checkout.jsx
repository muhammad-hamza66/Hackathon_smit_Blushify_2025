import React from "react";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Order placed successfully!");
    clearCart();
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
      <h3 className="fw-bold mb-4 text-center">Checkout</h3>

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <ul className="list-group mb-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <h6 className="mb-0">{item.name}</h6>
                  <small className="text-muted">
                    {item.quantity} × ${item.price.toFixed(2)}
                  </small>
                </div>
                <span className="fw-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}

            <li className="list-group-item d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </li>
          </ul>

          <button className="btn btn-success w-100" onClick={handleCheckout}>
            Place Order
          </button>

          <div className="text-center mt-3">
            <Link to="/products" className="text-decoration-none text-dark">
              ← Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
