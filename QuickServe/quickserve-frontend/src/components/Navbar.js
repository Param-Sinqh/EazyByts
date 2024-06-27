import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import "./css/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

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
            case '/address':
                return 'Checkout';
            default:
                return 'QuickServe';
        }
    };

    const handleClick = () => {
        navigate('/admin');
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
                {location.pathname !== '/admin' && location.pathname !== '/add-item' && location.pathname !== '/orders' ? (
                    <>
                        <li>
                            <Link to="/">
                                {/* <FontAwesomeIcon icon="fa fa-home" className='navIcons' /> */}
                                <h6>Home</h6>
                            </Link>
                        </li>

                        {location.pathname === '/' && (<li >
                            <Link to="#">
                                <h6>About</h6>
                            </Link>
                        </li>
                        )}

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
                ) :
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
                }

            </ul>
        </nav>
    );
};

export default Navbar;
