import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  const userId = 1; // Hardcoded for demonstration; replace with actual user ID after login
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={() => <Dashboard userId={userId} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
