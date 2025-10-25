import React from "react";
import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
  return (
    <div
      className="card h-100 border-0 shadow-sm position-relative overflow-hidden product-card"
      style={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        borderRadius: "15px",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        className="card-img-top p-3 bg-light"
        style={{
          height: "230px",
          objectFit: "contain",
          transition: "transform 0.3s ease",
        }}
      />

      <div className="card-body d-flex flex-column">
        <h6
          className="card-title fw-bold text-dark mb-2"
          style={{
            minHeight: "48px",
            fontSize: "1rem",
          }}
        >
          {product.title}
        </h6>

        <p
          className="card-text text-muted small flex-grow-1"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.description}
        </p>

        <p className="fw-bold text-dark fs-5 mb-3">${product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="btn btn-warning w-100 fw-semibold shadow-sm"
          style={{
            borderRadius: "10px",
            transition: "all 0.2s ease",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
