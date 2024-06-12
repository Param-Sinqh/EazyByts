import React, { useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, show, duration = 3000 }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                // Hide message after the specified duration
                if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('hide-toast'));
                }
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [show, duration]);

    return (
        <div className={`toast ${show ? 'show' : ''}`}>
            <p>{message}</p>
        </div>
    );
};

export default Toast;
