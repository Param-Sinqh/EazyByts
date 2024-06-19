import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/css/LogIn.css'; // Import the CSS file
import { Button } from 'reactstrap';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min';

const LogIn = () => {
  const [messageVisible, setMessageVisible] = useState(false);
  const [messageType, setMessageType] = useState(null);
  const [password, setPassword] = useState('');
  const [userid, setUserId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [failedMessage, setFailedMessage] = useState('');
  const vantaRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const vantaEffect = GLOBE({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x3fffcf,
      backgroundColor: 0x20018,
      THREE,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  useEffect(() => {
    if (successMessage) {
      setMessageType('success');
      setMessageVisible(true);
      setTimeout(() => {
        setMessageVisible(false);
      }, 5000);
      setTimeout(() => {
        setSuccessMessage('');
      }, 5500);

    } else if (failedMessage) {
      setMessageType('failed');
      setMessageVisible(true);
      setTimeout(() => {
        setMessageVisible(false);
      }, 5000);
      setTimeout(() => {
        setFailedMessage('');
      }, 5500);

    }
  }, [successMessage, failedMessage]);

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/demo/logIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userid, password }),
      });

      if (response.status === 200) {
        setSuccessMessage('Login successful');
        const data = await response.json(); // Parse response body as JSON

        // Check if data contains necessary properties
        if (data && data.role) {
          if (data.role === 'admin') {
            navigate('/courses', { state: { role: 'admin' } });
          } else {
            if (data.courseId === '' || data.courseId === null) {
              navigate('/courses', { state: { role: data.role, username: data.username, userid: userid } });
            } else {
              navigate('/coursecontentview', { state: { role: data.role, username: data.username, userid: userid, courseId: data.courseId } });
            }
          }
        } else {
          setFailedMessage('Role not found in response');
          throw new Error('Role not found');
        }
      } else {
        setFailedMessage('Incorrect UserID or Password');
        throw new Error('Authentication failed');
      }
    } catch (error) {
      if (error.message !== 'Authentication failed' && error.message !== 'Role not found') {
        setFailedMessage('Something went wrong... try again!');
      }
      console.error('Error:', error);
    }
  };


  return (
    <div ref={vantaRef} className="login-container">
      <div className={`message-container ${messageVisible ? 'visible' : ''}`}>
        {messageType === 'success' && <p className="login-message-success">{successMessage}</p>}
        {messageType === 'failed' && <p className="login-message-failed">{failedMessage}</p>}
      </div>
      <div className="welcome">
        <h1>Welcome to StudyNest</h1>
        <p>Discover, Learn, Achieve</p>
      </div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="userid">User id</label>
          <input
            type="text"
            id="userid"
            value={userid}
            onChange={handleUserIdChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <div className="login-buttons">
            <Button type="submit" color="primary">Login</Button>
            {/* <Button type="button" color="warning" onClick={() => navigate("/signup")}>Go to Signup</Button> */}
            <a href='/signup'>don't have an account? SignUp</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
