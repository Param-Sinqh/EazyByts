import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/OrderConfirmation.css';
import deliveryTakeOutImg from '../images/deliveryTakeOut.png';
import OrderTracking from './OrderTracking';
import OrderConfirmed from '../images/OrderConfirmed.svg';

const OrderConfirmation = ({ cart, address, payment, clearCart }) => {
    const navigate = useNavigate();
    const [OC_, setOC_] = useState('flex');
    const [OC_confirmed, setOC_confirmed] = useState('none');
    const [Order_Id, setOrder_Id] = useState('');

    useEffect(() => {
        setOC_confirmed('none')
    }, []);

    const handlePlaceOrder = async () => {
        // Prepare order details as an object
        const orderDetails = {
            items: JSON.stringify(cart), // Convert cart array to JSON string
            address: JSON.stringify(address), // Convert address object to JSON string
            paymentDetails: 'Cash On Delivery', // Set payment method directly as a string
            status: 1,
        };

        try {
            const response = await axios.post('http://localhost:8080/quickserve/orders', orderDetails);

            // Axios resolves successfully for status codes 200-299
            if (response.status === 200) {
                const result = response.data;
                // alert(`Order placed successfully! Your order ID is ${result.orderId}`);
                clearCart();
                // navigate('/');
                setOC_('none');
                setOC_confirmed('flex');
                setOrder_Id(result.orderId)
            } else {
                alert('Failed to place order. Please try again.');
            }
        } catch (error) {
            alert('Error placing order. Please try again.');
        }
    };

    const handleTrackOrder = () => {
        navigate('/track-order', { state: { orderId: Order_Id } });
    };

    return (
        <div className='OC-container'>
            <div style={{ display: OC_ }} className='OC-detail-container'>
                <div className='img-container'>
                    <img src={deliveryTakeOutImg} alt="Delivery Take Out" />
                    <h2><i>Fast Delivery</i></h2>
                    <h4><b>"On Time, Every Time"</b></h4>
                </div>
                <div className='OC-detail'>
                    <h1>Order Confirmation</h1>
                    <div className="order-details">
                        <div className='order-details-cont'>
                            <div>
                                <h2>Items</h2>
                                <ul>
                                    {cart.map((item, index) => (
                                        <li key={index}>
                                            {item.name} - {item.quantity} x ${item.price.toFixed(2)}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2>Address</h2>
                                <p>{address.first_name} {address.last_name}</p>
                                <p>{address.street}</p>
                                <p>{address.city}, {address.state} {address.zip}</p>
                            </div>

                            <div>
                                <h2>Payment Method</h2>
                                <p>{payment.method || 'Cash On Delivery'}</p>
                            </div>
                        </div>

                        <div className='OC-btn-container'>
                            <button onClick={handlePlaceOrder}>Place Order</button>
                        </div>
                    </div>

                </div>
            </div>
            <div style={{ display: OC_confirmed }} className='OC-confirmed-container'>
                <div className='img-container'>
                    <img src={deliveryTakeOutImg} alt="Delivery Take Out" />
                    <h2><i>Fast Delivery</i></h2>
                    <h4><b>"On Time, Every Time"</b></h4>
                </div>
                <div className='OC-detail'>
                    <h1>Order Confirmed</h1>
                    <h4>Your order has been placed</h4>
                    <p>Order ID: <b><span style={{ fontSize: '2rem' }}>{Order_Id}</span></b></p>
                    <p>Use the Order ID to track its status.</p>

                    {/* <OrderTracking status={2} /> */}
                    <img src={OrderConfirmed} alt="Order Confirmed" />

                    <div className="order-details">
                        <div className='OC-btn-container'>
                            <button onClick={handleTrackOrder}>Track Order</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;
