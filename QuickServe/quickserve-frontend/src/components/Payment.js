import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Payment = ({ setPaymentDetails }) => {
    const [payment, setPaymentLocal] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentLocal({ ...payment, [name]: value });
    };

    const handleNext = () => {
        setPaymentDetails(payment);
    };

    return (
        <div>
            <h1>Enter Payment Details</h1>
            <form>
                <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleChange} />
                <input type="text" name="expiryDate" placeholder="Expiry Date" onChange={handleChange} />
                <input type="text" name="cvv" placeholder="CVV" onChange={handleChange} />
            </form>
            <Link to="/checkout" onClick={handleNext}>Proceed to Checkout</Link>
        </div>
    );
};

export default Payment;
