import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Home.css'

const Home = ({ addToCart }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch items from the backend
        axios.get('/api/items')
            .then(response => setItems(response.data))
            .catch(error => console.error('Error fetching items:', error));
    }, []);

    return (

        <div className="home-container" >
            <div className='menu-search-container'>

                <h1>Menu</h1>
                <input autoComplete='off' className='menu-searchbar' name="myInput" placeholder='search..' />
                <div>
                    {items.map(item => (
                        <div key={item.item_id}>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>${item.price}</p>
                            <p>{item.veg ? 'Vegetarian' : 'Non-Vegetarian'}</p>
                            <button onClick={() => addToCart(item)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )

}

export default Home;