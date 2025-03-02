import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';
import ItemList from './pages/ItemList';
import AddItem from './components/AddItem';
import { getCart } from './utils/cartUtils';

const App = () => {
  const [cartCount, setCartCount] = useState(getCart().length);

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCart().length);
    };

    window.addEventListener('storage', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  return (
    <Router>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<div className="container mt-4"><h1>Welcome to RandoStore!</h1><p>Navigate to various sections using the menu.</p></div>} />
        <Route path="/add-items" element={<AddItem />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
