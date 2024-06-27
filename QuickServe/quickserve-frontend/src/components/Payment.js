import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Payment.css';

const Payment = ({ setPaymentDetails }) => {
    const [payment, setPaymentLocal] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentLocal({ ...payment, [name]: value });
    };

    const handleNext = (e) => {
        e.preventDefault();
        const { cardNumber, expiryDate, cvv } = payment;
        if (!cardNumber || !expiryDate || !cvv) {
            alert("Please fill out all fields.");
        } else {
            setPaymentDetails(payment);
            navigate('/checkout');
        }
    };

    return (
        <div className='address-container'>
            <div className='address-form-container'>
                <div className='img-container'>
                    {/* <img src={deliveryTakeOutImg} alt="Delivery Take Out" /> */}
                    <h2><i>Fast Delivery</i></h2>
                    <h4><b>"On Time, Every Time"</b></h4>
                </div>
                <div className='address-form'>
                    <h1>Payment Details</h1>
                    <form onSubmit={handleNext}>
                        <input type="text" name="cardNumber" placeholder="Card Number" required onChange={handleChange} />
                        <input type="text" name="expiryDate" placeholder="Expiry Date" required onChange={handleChange} />
                        <input type="text" name="cvv" placeholder="CVV" required onChange={handleChange} />
                        <div className='payment-btn-container'>
                            <button type="submit">Proceed to Payment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;
