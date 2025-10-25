import { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../../Context/CartContext";
import ProductCard from "../ProductCard/ProductCard";

function Productitems() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log("Fetched products:", response.data);
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="text-center text-danger py-5">
        Something went wrong. Please try again later.
      </div>
    );

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">🛍 Product List</h2>

      <div className="row g-4">
        {products.length > 0 ? (
          products.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <ProductCard product={item} addToCart={addToCart} />
            </div>
          ))
        ) : (
          <div className="text-center text-muted">No products found 🛒</div>
        )}
      </div>
    </div>
  );
}

export default Productitems;
