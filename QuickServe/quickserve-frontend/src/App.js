import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Address from './components/Address';
import OrderConfirmation from './components/OrderConfirmation';
import Payment from './components/Payment';
import Checkout from './components/Checkout';
import OrderTracking from './components/OrderTracking';
import Home from './components/Home';

import './components/css/App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import AdminLogin from './components/AdminLogin';
import AdminOrderList from './components/AdminOrderList';
import AddNewItem from './components/AddNewItem';

library.add(fas);

const App = () => {
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState({});
  const [payment, setPayment] = useState({});

  // Load data from local storage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    const storedAddress = JSON.parse(localStorage.getItem('address'));
    const storedPayment = JSON.parse(localStorage.getItem('payment'));

    if (storedCart) setCart(storedCart);
    if (storedAddress) setAddress(storedAddress);
    if (storedPayment) setPayment(storedPayment);
  }, []);

  // Save data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('address', JSON.stringify(address));
    localStorage.setItem('payment', JSON.stringify(payment));
  }, [cart, address, payment]);

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
    localStorage.removeItem('cart');
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/menu" element={<Menu cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} clearCart={clearCart} />} />
          <Route path="/address" element={<Address setAddress={setAddress} />} />
          <Route path="/order-confirmation" element={<OrderConfirmation cart={cart} address={address} payment={payment} clearCart={clearCart} />} />
          <Route path="/payment" element={<Payment setPaymentDetails={setPayment} />} />
          <Route path="/checkout" element={<Checkout cart={cart} address={address} payment={payment} />} />
          <Route path="/track-order" element={<OrderTracking />} />

          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/orders" element={<AdminOrderList />} />
          <Route path="/add-item" element={<AddNewItem />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
