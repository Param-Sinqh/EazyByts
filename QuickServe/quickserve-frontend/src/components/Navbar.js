import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./css/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        setCartCount(count);
    }, [cart]);

    return (
        <nav>
            <h2>QuickServe</h2>
            <ul>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon="fa fa-home" className='navIcons' />
                    </Link>
                </li>
                <li>
                    <Link to="/cart">
                        <FontAwesomeIcon icon="fa fa-shopping-cart" className='navIcons' />
                    </Link>
                    {cartCount > 0 && (
                        <div className='cartCount'>
                            <p id='cartCount'>{cartCount}</p>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
