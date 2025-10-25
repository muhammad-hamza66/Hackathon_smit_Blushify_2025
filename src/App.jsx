import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer"; 
import Index from "./Pages/Home/Index";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkoout/Checkout";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  );
}

export default App;
