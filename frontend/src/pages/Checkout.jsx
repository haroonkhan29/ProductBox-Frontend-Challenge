import React, { useState, useEffect } from 'react';
import { getCart, removeFromCart } from '../utils/cartUtils';
import { FaTrash } from 'react-icons/fa';  

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [editItem, setEditItem] = useState(null); 
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState('');

  useEffect(() => {
    setCartItems(getCart());

    const updateCartCount = () => {
      setCartItems(getCart());  
    };

    window.addEventListener('storage', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  const handleDelete = (itemId) => {
    removeFromCart(itemId);
    window.dispatchEvent(new Event('storage'));
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setNewItemName(item.name);
    setNewItemPrice(item.price);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateCartItem(editItem.id, { name: newItemName, price: newItemPrice });
    setCartItems(getCart());
    setEditItem(null); 
  };

  return (
    <div className="container mt-4">
      <h2>Cart</h2>

      {editItem ? (
        <div>
          <h3>Edit Item</h3>
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                value={newItemPrice}
                onChange={(e) => setNewItemPrice(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
            <button
              type="button"
              className="btn btn-secondary ml-2"
              onClick={() => setEditItem(null)} 
            >
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <div className="list-group">
          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '15px' }}
                    />
                    <div>
                      <h5>{item.name}</h5>
                      <p>Price: ${item.price}</p>
                    </div>
                  </div>
                 <div className="d-flex flex-column align-items-end">
                <button 
                  className="btn btn-sm p-0"  
                  onClick={() => handleDelete(item.id)} 
                  style={{ background: 'transparent', border: 'none' }} 
                >
                  <FaTrash style={{ color: '#FF4500', fontSize: '18px' }} /> 
                </button>
              </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Checkout;
