import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { addItemToCart } from '../utils/cartUtils';
import './Itemlist.css';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [sortOption, setSortOption] = useState('nameAsc');
  const [editingItem, setEditingItem] = useState(null);
  const [editedItemData, setEditedItemData] = useState({ name: '', price: '', img: '' });

  useEffect(() => {
    axios.get('http://localhost:3000/items')
      .then(response => {
        setItems(response.data);
        setFilteredItems(response.data);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    let filtered = items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch (sortOption) {
      case 'priceAsc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'nameAsc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameDesc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    setFilteredItems(filtered);
  }, [searchQuery, items, sortOption]);

  const handleAddToCart = (item) => {
    addItemToCart(item);
  };

  const handleEdit = (item) => {
    setEditingItem(item.id);
    setEditedItemData({ name: item.name, price: item.price, img: item.img });
  };

  const handleSaveEdit = (id) => {
    const updatedItemData = { ...editedItemData, id: id };

    axios.put(`http://localhost:3000/items/${id}`, updatedItemData)
      .then(response => {
        const updatedItem = response.data;
        setItems(prevItems => prevItems.map(item => item.id === id ? updatedItem : item));
        setEditingItem(null);
      })
      .catch(err => console.error(err));
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
    setEditedItemData({ name: '', price: '', img: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItemData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="container mt-4">
      <div className="header" style={{ backgroundColor: '#FF4500', padding: '10px 0', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ borderRadius: '20px', padding: '10px' }}
            />
          </div>
          <div className="col-md-3">
            <select
              className="form-control"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              style={{ borderRadius: '20px', padding: '10px' }}
            >
              <option value="nameAsc">Sort by Name (A-Z)</option>
              <option value="nameDesc">Sort by Name (Z-A)</option>
              <option value="priceAsc">Sort by Price (Low to High)</option>
              <option value="priceDesc">Sort by Price (High to Low)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Items Section */}
      <h2 className="mt-4">Items</h2>
      <div className="row">
        {filteredItems.map(item => (
          <div key={item.id} className="col-md-4">
            <div className="card mb-4">
              <img src={item.img} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ${item.price}</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => handleAddToCart(item)} 
                  style={{ backgroundColor: '#FF4500', borderColor: 'orange' }}  
                >
                  Add to Cart
                </button>

                <button
                  className="btn btn-secondary d-flex justify-content-end mt-2"
                  onClick={() => handleEdit(item)}
                  style={{ backgroundColor: '#FFA500', borderColor: 'orange' }}
                >
                  Edit
                </button>

                {editingItem === item.id && (
                  <div className="mt-3">
                    <input
                      type="text"
                      className="form-control mb-2"
                      name="name"
                      value={editedItemData.name}
                      onChange={handleChange}
                    />
                    <input
                      type="number"
                      className="form-control mb-2"
                      name="price"
                      value={editedItemData.price}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      className="form-control mb-2"
                      name="img"
                      value={editedItemData.img}
                      onChange={handleChange}
                    />
                    <div className="d-flex justify-content-end mt-2">
                      <button
                        className="btn btn-success"
                        onClick={() => handleSaveEdit(item.id)}
                      >
                        Save Changes
                      </button>
                      <button
                        className="btn btn-danger ml-2"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
