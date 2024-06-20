import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Address = ({ setAddress }) => {
    const [address, setAddressLocal] = useState({
        street: '',
        city: '',
        state: '',
        zip: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddressLocal({ ...address, [name]: value });
    };

    const handleNext = () => {
        setAddress(address);
    };

    return (
        <div>
            <h1>Enter Address Details</h1>
            <form>
                <input type="text" name="street" placeholder="Street" onChange={handleChange} />
                <input type="text" name="city" placeholder="City" onChange={handleChange} />
                <input type="text" name="state" placeholder="State" onChange={handleChange} />
                <input type="text" name="zip" placeholder="ZIP Code" onChange={handleChange} />
            </form>
            <Link to="/payment" onClick={handleNext}>Proceed to Payment</Link>
        </div>
    );
};

export default Address;
