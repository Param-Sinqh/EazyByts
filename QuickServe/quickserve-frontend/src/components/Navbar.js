import React from 'react';
import { Link } from 'react-router-dom';
import "./css/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
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
                    <Link to="/cart" >
                        <FontAwesomeIcon icon="fa fa-shopping-cart" className='navIcons' />
                    </Link>
                    <div className='cartCount'>
                        <p id='cartCount'>10</p>
                    </div>
                </li>

            </ul>
        </nav>
    );
};

export default Navbar;
