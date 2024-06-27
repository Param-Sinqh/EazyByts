import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/OrderTracking.css';
import { useLocation } from 'react-router-dom';

const OrderTracking = () => {
    const [status, setStatus] = useState();
    const [orderId, setOrderId] = useState('');
    const location = useLocation();
    const defaultOrderId = location.state?.orderId || '';

    useEffect(() => {
        if (defaultOrderId) {
            setOrderId(defaultOrderId);
            fetchOrderStatus(defaultOrderId);
        }
    }, [defaultOrderId]);

    const fetchOrderStatus = async (orderId) => {
        try {
            const response = await axios.get(`http://localhost:8080/quickserve/orders/${orderId}`);
            if (response.data && response.data.status) {
                setStatus(response.data.status);
            } else {
                console.error('Invalid response data:', response.data);
            }
        } catch (error) {
            console.error('Error fetching order status:', error);
        }
    };

    useEffect(() => {
        if (status > 0) {
            const progressBar = document.getElementById(`progress-bar-${status}`);
            if (progressBar) {
                let start = 0;
                const end = 100;
                const duration = 1500;
                const increment = end / (duration / 10);
                const animateProgressBar = () => {
                    start += increment;
                    if (start <= end) {
                        progressBar.value = start;
                        setTimeout(animateProgressBar, 10);
                    } else {
                        progressBar.value = end;
                    }
                };
                animateProgressBar();
            }
        }
    }, [status]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (orderId) {
            fetchOrderStatus(orderId);
        }
    };

    const getStatusClass = (step) => {
        return status >= step ? 'active' : 'inactive';
    };

    return (
        <div className='order-tracking-page'>
            <div className='order-tracking-container'>
                <form className='orderId-form' onSubmit={handleSearch}>
                    <input
                        type='text'
                        placeholder='Enter Order ID'
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                    />
                    <button type='submit'>Track Order</button>
                </form>
                {status && (
                    <div className="order-tracking" style={{ display: 'flex' }}>
                        <div className={`step ${getStatusClass(1)}`}>
                            <div className="circle"></div>
                            <p>Order Placed</p>
                        </div>
                        <progress className={`progress ${getStatusClass(1)}`} id="progress-bar-1" value={status > 1 ? 100 : 0} max="100"></progress>

                        <div className={`step ${getStatusClass(2)}`}>
                            <div className="circle"></div>
                            <p>Processing</p>
                        </div>
                        <progress className={`progress ${getStatusClass(2)}`} id="progress-bar-2" value={status > 2 ? 100 : 0} max="100"></progress>

                        <div className={`step ${getStatusClass(3)}`}>
                            <div className="circle"></div>
                            <p>Shipped</p>
                        </div>
                        <progress className={`progress ${getStatusClass(3)}`} id="progress-bar-3" value={status > 3 ? 100 : 0} max="100"></progress>

                        <div className={`step ${getStatusClass(4)}`}>
                            <div className="circle"></div>
                            <p>Delivered</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrderTracking;
