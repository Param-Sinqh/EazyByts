import React from 'react';
import axios from 'axios';

const Checkout = ({ cart, address, payment }) => {
    const handleCheckout = () => {
        // Prepare order details as an object
        const orderDetails = {
            items: JSON.stringify(cart), // Convert cart array to JSON string
            address: JSON.stringify(address), // Convert address object to JSON string
            paymentDetails: JSON.stringify(payment) // Convert payment object to JSON string
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
