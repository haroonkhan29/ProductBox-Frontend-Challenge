import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-black" to="/">
          <img
            src="/img/logo.jpg" 
            alt="RandoStore Logo"
            style={{ height: '50px', marginRight: '10px' }} 
          />
          RandoStore
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link text-black" to="/add-items" style={{ fontWeight: 'bold' }}>
              Add Items
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" to="/items" style={{ fontWeight: 'bold' }}>
              Items List
            </Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link text-black" to="/checkout" style={{ fontWeight: 'bold', position: 'relative' }}>
            <FaShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="badge" style={{
                backgroundColor: '#FF4500',
                color: 'white',
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                fontSize: '14px',
                padding: '3px 6px',
                borderRadius: '50%',
                border: '1px solid white',
                fontWeight: 'bold',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              }}>
                {cartCount}
              </span>

            )}
          </Link>
        </li>
      </ul>
    </div>

      </div>
    </nav>
  );
};

export default Navbar;
