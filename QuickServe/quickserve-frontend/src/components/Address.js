import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Address.css';
import deliveryTakeOutImg from '../images/deliveryTakeOut.png';

const Address = ({ setAddress }) => {
    const [address, setAddressLocal] = useState({
        first_name: '',
        last_name: '',
        street: '',
        city: '',
        state: '',
        zip: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddressLocal({ ...address, [name]: value });
    };

    const handleNext = (e) => {
        e.preventDefault();
        const { first_name, last_name, street, city, state, zip } = address;
        if (!first_name || !last_name || !street || !city || !state || !zip) {
            alert("Please fill out all fields.");
        } else {
            setAddress(address);
            navigate('/order-confirmation');
        }
    };

    return (
        <div className='address-container'>
            <div className='address-form-container'>
                <div className='img-container'>
                    <img src={deliveryTakeOutImg} alt="Delivery Take Out" />
                    <h2><i>Fast Delivery</i></h2>
                    <h4><b>"On Time, Every Time"</b></h4>
                </div>
                <div className='address-form'>
                    <h1>Delivery Details</h1>
                    <form onSubmit={handleNext}>
                        <input type="text" name="first_name" placeholder="First Name" required onChange={handleChange} />
                        <input type="text" name="last_name" placeholder="Last Name" required onChange={handleChange} />
                        <input type="text" name="street" placeholder="Street" required onChange={handleChange} />
                        <input type="text" name="city" placeholder="City" required onChange={handleChange} />
                        <input type="text" name="state" placeholder="State" required onChange={handleChange} />
                        <input type="text" name="zip" placeholder="ZIP Code" required onChange={handleChange} />
                        <div className='payment-btn-container'>
                            <button type="submit">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Address;
