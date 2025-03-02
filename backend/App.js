import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './static/Homepage';
import CheckoutPage from './static/CheckoutPage';
import AddItemsPage from './static/AddItemsPage';
import ItemsPage from './static/ItemsPage';


function App() {
    return (
      <Router>
        <div>
          <nav>
            <a href="/">Home</a>
            <a href="/items">Items</a>
            <a href="/cart">Cart</a>
            <a href="/add-item">Add Item</a>
          </nav>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/items" component={ItemsPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/add-item" component={AddItemPage} />
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;
