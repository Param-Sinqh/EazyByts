// AdminOrderList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/AdminOrderList.css';

const AdminOrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:8080/quickserve/orders');
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const handleStatusChange = async (orderId, status) => {
        try {
            await axios.put(`http://localhost:8080/quickserve/orders/${orderId}/status?status=${status}`);
            fetchOrders(); // Refresh orders after status update
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    const calculateOrderTotal = (items) => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    const getStatusBackgroundColor = (status) => {
        switch (status) {
            case 1:
                return 'lightblue';
            case 2:
                return 'lightgreen';
            case 3:
                return 'lightyellow';
            case 4:
                return 'lightcoral';
            default:
                return 'white';
        }
    };

    return (
        <div className='admin_OL-page'>
            <div className='admin_OL-container'>
                <h2>Order List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Items</th>
                            <th>Address</th>
                            <th>Order Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => {
                            const items = JSON.parse(order.items);
                            const address = JSON.parse(order.address);
                            const orderTotal = calculateOrderTotal(items);

                            return (
                                <tr key={order.orderId}>
                                    <td>{order.orderId}</td>
                                    <td>
                                        <ul>
                                            {items.map((item, index) => (
                                                <li key={index}>
                                                    {item.name} - {item.quantity} x ${item.price.toFixed(2)}
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td>
                                        <p>{address.first_name} {address.last_name}</p>
                                        <p>{address.street}</p>
                                        <p>{address.city}, {address.state} {address.zip}</p>
                                    </td>
                                    <td>${orderTotal}</td>
                                    <td>
                                        <select
                                            value={order.status}
                                            onChange={(e) => handleStatusChange(order.orderId, e.target.value)}
                                            style={{ background: getStatusBackgroundColor(order.status) }}
                                        >
                                            <option value="1">Order Placed</option>
                                            <option value="2">Processing</option>
                                            <option value="3">Shipped</option>
                                            <option value="4">Delivered</option>
                                        </select>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminOrderList;
