import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Home = ({ addToCart }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch items from the backend
        axios.get('http://localhost:8080/quickserve/items')
            .then(response => setItems(response.data))
            .catch(error => console.error('Error fetching items:', error));
    }, []);

    return (
        <div className="home-container">
            <div className='menu-search-container'>
                <h1>Menu</h1>
                <input autoComplete='off' className='menu-searchbar' name="myInput" placeholder='search..' />
                <div className='menu-item-list'>
                    {items.filter(item => item.veg).map(item => (
                        <div className='menu-item' key={item.itemId}>
                            <div className='name-avail-desc'>
                                <div className='name-avail'>
                                    <h2>{item.name}</h2>
                                    {item.availability ? <p className='item-available'>Available</p> : <p className='item-notAvailable'>Not Available</p>}
                                </div>
                                <p className='item-desc'>{item.description}</p>
                            </div>
                            <div className='price-atc'>
                                <p>${item.price}</p>
                                {item.availability &&
                                    <button onClick={() => addToCart(item)}>
                                        <FontAwesomeIcon className='atcIcon' icon={faCartPlus}/>
                                    </button>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
