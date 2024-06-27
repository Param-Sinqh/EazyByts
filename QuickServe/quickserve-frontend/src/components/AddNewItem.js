import React, { useState } from 'react';
import axios from 'axios';

const AddNewItem = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [availability, setAvailability] = useState(true);
    const [veg, setVeg] = useState(true);

    const handleAddItem = async () => {
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
        <div>
            <h2>Add New Item</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <label>
                Availability:
                <input
                    type="checkbox"
                    checked={availability}
                    onChange={(e) => setAvailability(e.target.checked)}
                />
            </label>
            <label>
                Veg:
                <input
                    type="checkbox"
                    checked={veg}
                    onChange={(e) => setVeg(e.target.checked)}
                />
            </label>
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

export default AddNewItem;
