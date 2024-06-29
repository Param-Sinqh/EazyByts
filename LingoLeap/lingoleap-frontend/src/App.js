import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  const userId = 1; // Hardcoded for demonstration; replace with actual user ID after login
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/dashboard" element={() => <Dashboard userId={userId} />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
