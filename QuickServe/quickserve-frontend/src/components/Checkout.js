import React from 'react';
import axios from 'axios';

const Checkout = ({ cart, address, payment }) => {
    const handleCheckout = () => {
        const orderDetails = {
            items: cart,
            address: address,
            payment_details: payment
        };

        axios.post('http://localhost:8080/quickserve/orders', orderDetails)
            .then(response => {
                console.log('Order placed successfully:', response.data);
            })
            .catch(error => {
                console.error('Error placing order:', error);
            });
    };

    return (
        <div>
            <h1>Checkout</h1>
            <button onClick={handleCheckout}>Place Order</button>
        </div>
    );
};

export default Checkout;
