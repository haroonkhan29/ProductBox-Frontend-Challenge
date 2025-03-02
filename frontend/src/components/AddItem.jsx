import React, { useState } from 'react';
import axios from 'axios';
import './AddItem.css';

const AddItem = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [img, setImg] = useState('');
  const [showSuccess, setShowSuccess] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { name, price, img };
    

    axios.post('http://localhost:3000/items', newItem)
      .then(response => {
        setShowSuccess(true); 
        setName('');
        setPrice('');
        setImg('');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container add-item-container mt-5">
      <h2 className="form-title">Add Item</h2>
      <form onSubmit={handleSubmit} className="add-item-form">
        <div className="form-group mb-4">
          <label htmlFor="name" className="form-label">Item Name</label>
          <input 
            type="text" 
            className="form-control form-input" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter item name" 
            required 
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="price" className="form-label">Price</label>
          <input 
            type="number" 
            className="form-control form-input" 
            id="price" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            placeholder="Enter item price" 
            required 
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input 
            type="text" 
            className="form-control form-input" 
            id="image" 
            value={img} 
            onChange={(e) => setImg(e.target.value)} 
            placeholder="Enter image URL" 
            required 
          />
        </div>
        <button type="submit" className="btn btn-submit mt-3">Submit</button>
      </form>

      {showSuccess && (
        <div className="success-message-card">
          <p>Item added successfully!</p>
        </div>
      )}
    </div>
  );
};

export default AddItem;
