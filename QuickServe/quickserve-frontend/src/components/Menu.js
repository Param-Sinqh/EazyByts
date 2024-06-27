import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import CustomDietLogo from './CustomDietLogo';

const Menu = ({ cart, addToCart, removeFromCart }) => {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/quickserve/items')
            .then(response => setItems(response.data))
            .catch(error => console.error('Error fetching items:', error));
    }, []);

    useEffect(() => {
        const query = searchQuery.toLowerCase();
        const result = items.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.price.toString().includes(query) ||
            (item.veg ? 'veg' : 'non-veg').includes(query)
        );
        setFilteredItems(result);
    }, [searchQuery, items]);

    const isItemInCart = (itemId) => cart.some(cartItem => cartItem.itemId === itemId);

    return (
        <div className="menu-container">
            <div className='menu-search-container'>
                <h1>Menu</h1>
                <input
                    autoComplete='off'
                    className='menu-searchbar'
                    name="myInput"
                    placeholder='search menu'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className='menu-item-list'>
                    {filteredItems.map(item => (
                        <div className='menu-item' key={item.itemId}>
                            <div className='name-avail-desc'>
                                <div className='name-avail'>
                                    <h2>{item.name}</h2>
                                    <div className='dietIcon'>
                                        {item.veg ? <CustomDietLogo fill={"#12b800"} /> : <CustomDietLogo fill={"#b80000"} />}
                                    </div>
                                    {item.veg ? <p style={{ color: '#12b800' }}>Veg</p> : <p style={{ color: '#b80000' }}>Non Veg</p>}
                                </div>
                                <p className='item-desc'>{item.description}</p>
                            </div>
                            <div className='price-atc'>
                                <p>${item.price}</p>
                                <button
                                    onClick={() => isItemInCart(item.itemId) ? removeFromCart(item.itemId) : addToCart(item)}
                                    className={isItemInCart(item.itemId) ? 'in-cart' : ''}
                                >
                                    <FontAwesomeIcon className='atcIcon' icon={isItemInCart(item.itemId) ? faCheck : faCartPlus} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
