import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        setCartCount(count);
    }, [cart]);

    const handleNavigation = (section) => {
        if (location.pathname === '/') {
            document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/#' + section);
            setTimeout(() => {
                document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
            }, 100); // Add a short delay to ensure navigation happens
        }
    };

    const getPageName = () => {
        switch (location.pathname) {
            case '/':
                return 'QuickServe';
            case '/menu':
                return 'Menu';
            case '/cart':
                return 'Cart';
            case '/address':
                return 'Checkout';
            case '/order-confirmation':
                return 'OrderConfirmation';
            case '/track-order':
                return 'OrderTracking';
            case '/admin':
                return 'QuickServe Admin';
            case '/orders':
                return 'QuickServe Admin';
            case '/add-item':
                return 'QuickServe Admin';
            default:
                return 'QuickServe';
        }
    };

    const handleHomeClick = () => {
        navigate('/admin');
    };

    const handleAdminClick = () => {
        navigate('/');
    };

    return (
        <nav>
            <h2
                onClick={() => {
                    if (location.pathname === '/') {
                        handleHomeClick();
                    } else if (location.pathname === '/admin') {
                        handleAdminClick();
                    }
                }}
                style={{ cursor: location.pathname === '/' || location.pathname === '/admin' ? 'pointer' : 'default' }}
            >
                {getPageName()}
            </h2>
            <ul>
                {location.pathname !== '/admin' && location.pathname !== '/add-item' && location.pathname !== '/orders' ? (
                    <>
                        {location.pathname !== '/' &&
                            <li>
                                <Link to="/">
                                    <h6>Home</h6>
                                </Link>
                            </li>
                        }

                        {location.pathname === '/' &&
                            <>
                                <li>
                                    <Link to="/" onClick={() => handleNavigation('about')}>
                                        <h6>About</h6>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" onClick={() => handleNavigation('chefs')}>
                                        <h6>Chefs</h6>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" onClick={() => handleNavigation('footer')}>
                                        <h6>Footer</h6>
                                    </Link>
                                </li>
                            </>
                        }

                        <li>
                            <Link to="/menu">
                                <h6>Menu</h6>
                            </Link>
                        </li>
                        <li>
                            <Link to="/track-order">
                                <h6>Track Order</h6>
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
                    </>
                ) : (
                    <>
                        {location.pathname !== '/admin' && (
                            <>
                                <li>
                                    <Link to="/orders">
                                        <h6>Orders</h6>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/add-item">
                                        <h6>New Item</h6>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/admin">
                                        <FontAwesomeIcon icon="fa fa-logout" className='navIcons' />
                                        <h6>LogOut</h6>
                                    </Link>
                                </li>
                            </>
                        )}
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
