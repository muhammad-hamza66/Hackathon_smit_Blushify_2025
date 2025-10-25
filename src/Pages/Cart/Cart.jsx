import React from "react";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, increment, decrement, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container text-center py-5">
        <h2>Your cart is empty 🛒</h2>
        <Link to="/products" className="btn btn-primary mt-3">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">🛍 Your Shopping Cart</h2>

      <div className="row g-4">
        {cartItems.map((item) => (
          <div key={item.id} className="col-12 col-md-6 col-lg-4">
            <div
              className="card h-100 border-0 shadow-sm hover-glow"
              style={{ transition: "0.3s ease" }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top p-3"
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.name}</h5>
                <p className="fw-bold text-primary fs-5 mb-1">${item.price}</p>

                <div className="d-flex justify-content-center align-items-center mb-3">
                  <button
                    className="btn btn-outline-secondary btn-sm mx-2"
                    onClick={() => decrement(item.id)}
                  >
                    −
                  </button>
                  <span className="fw-bold">{item.quantity}</span>
                  <button
                    className="btn btn-outline-secondary btn-sm mx-2"
                    onClick={() => increment(item.id)}
                  >
                    +
                  </button>
                </div>

                <p className="text-success fw-bold mb-3">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  className="btn btn-danger btn-sm w-100"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 text-end">
        <h4>
          Total: <span className="text-success">${totalPrice.toFixed(2)}</span>
        </h4>
        <div className="mt-3">
          <button className="btn btn-outline-danger me-2" onClick={clearCart}>
            Clear Cart
          </button>
          <Link to="/checkout" className="btn btn-success">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
