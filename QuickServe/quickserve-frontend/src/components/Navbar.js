import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./css/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        setCartCount(count);
    }, [cart]);

    const getPageName = () => {
        switch (location.pathname) {
            case '/':
                return 'QuickServe';
            case '/cart':
                return 'Cart';
            default:
                return 'QuickServe';
        }
    };

    const handleClick = () => {
        // Define your onClick functionality here
        console.log("H2 clicked on home page");
    };

    return (
        <nav>
            <h2
                onClick={location.pathname === '/' ? handleClick : undefined}
                style={{ cursor: location.pathname === '/' ? 'pointer' : 'default' }}
            >
                {getPageName()}
            </h2>
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
