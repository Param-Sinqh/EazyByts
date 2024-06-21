import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Address from './components/Address';
import Payment from './components/Payment';
import Checkout from './components/Checkout';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add all solid icons to the library
library.add(fas);

const App = () => {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState({});
  const [payment, setPayment] = useState({});

  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  const updateCart = (item, quantity) => {
    setCart(cart.map(cartItem =>
      cartItem.item_id === item.item_id ? { ...cartItem, quantity: Number(quantity) } : cartItem
    ).filter(cartItem => cartItem.quantity > 0));
  };

  return (
    <Router>
      <NavigationBar />
      {/* <div className="App"> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} />} />
          <Route path="/address" element={<Address setAddress={setAddress} />} />
          <Route path="/payment" element={<Payment setPaymentDetails={setPayment} />} />
          <Route path="/checkout" element={<Checkout cart={cart} address={address} payment={payment} />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
};

export default App;
