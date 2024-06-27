// AddNewItem.js

import React, { useState } from 'react';
import axios from 'axios';
import './css/AddNewItem.css';

const AddNewItem = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [availability, setAvailability] = useState(true);
    const [veg, setVeg] = useState(true);

    const handleAddItem = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const newItem = {
            name,
            description,
            price: parseFloat(price),
            availability,
            veg,
        };

        try {
            await axios.post('http://localhost:8080/quickserve/items', newItem);
            alert('Item added successfully');
            setName('');
            setDescription('');
            setPrice('');
            setAvailability(true);
            setVeg(true);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div className='addItem-page'>
            <form className='addItem-container' onSubmit={handleAddItem}>
                <h2>Add New Item</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <div className="veg-nonveg-container">
                    <label className="veg-label">
                        Veg:
                        <input
                            type="radio"
                            value={true}
                            checked={veg === true}
                            onChange={() => setVeg(true)}
                        />
                    </label>
                    <label className="nonveg-label">
                        Non-Veg:
                        <input
                            type="radio"
                            value={false}
                            checked={veg === false}
                            onChange={() => setVeg(false)}
                        />
                    </label>
                </div>
                <label>
                    Availability:
                    <input
                        type="checkbox"
                        checked={availability}
                        onChange={(e) => setAvailability(e.target.checked)}
                    />
                </label>
                <button type='submit'>Add Item</button>
            </form>
        </div>
    );
};

export default AddNewItem;
