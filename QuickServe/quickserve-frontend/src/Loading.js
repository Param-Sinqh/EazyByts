import React from 'react';
import './Loading.css'; // Optional: Add some styles

const Loading = () => {
    return (
        <div className="loading">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
};

export default Loading;
