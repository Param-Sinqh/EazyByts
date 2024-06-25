import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Address from './components/Address';
import Payment from './components/Payment';
import Checkout from './components/Checkout';

import './components/css/App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const App = () => {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState({});
  const [payment, setPayment] = useState({});

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.itemId === item.itemId);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.itemId === item.itemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.itemId !== itemId));
  };

  const updateCart = (item, quantity) => {
    setCart((prevCart) =>
      quantity === 0
        ? prevCart.filter((cartItem) => cartItem.itemId !== item.itemId)
        : prevCart.map((cartItem) =>
          cartItem.itemId === item.itemId ? { ...cartItem, quantity: Number(quantity) } : cartItem
        )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} clearCart={clearCart} />} />
          <Route path="/address" element={<Address setAddress={setAddress} />} />
          <Route path="/payment" element={<Payment setPaymentDetails={setPayment} />} />
          <Route path="/checkout" element={<Checkout cart={cart} address={address} payment={payment} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
