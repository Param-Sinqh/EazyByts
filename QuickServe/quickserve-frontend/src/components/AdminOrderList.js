import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

    return (
        <div>
            <h2>Order List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Items</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Change Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.orderId}>
                            <td>{order.orderId}</td>
                            <td>{order.items}</td>
                            <td>{order.address}</td>
                            <td>{order.status}</td>
                            <td>
                                <select
                                    value={order.status}
                                    onChange={(e) => handleStatusChange(order.orderId, e.target.value)}
                                >
                                    <option value="1">Order Placed</option>
                                    <option value="2">Processing</option>
                                    <option value="3">Shipped</option>
                                    <option value="4">Delivered</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminOrderList;
