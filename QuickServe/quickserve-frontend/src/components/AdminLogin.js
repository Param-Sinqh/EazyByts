import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/AdminLogin.css'

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            const response = await axios.post('http://localhost:8080/quickserve/admin/login', { username, password });
            if (response.data) {
                navigate('/orders');
            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className='admin-page' >
            <form className='login-form' onSubmit={handleLogin}>
                <h2>Admin Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
