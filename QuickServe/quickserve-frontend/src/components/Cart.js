import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, updateCart }) => {
    const handleQuantityChange = (item, quantity) => {
        updateCart(item, quantity);
    };

    return (
        <div>
            <h1>Cart</h1>
            <div>
                {cart.map((item, index) => (
                    <div key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item, e.target.value)}
                            min="1"
                        />
                        <button onClick={() => handleQuantityChange(item, 0)}>Remove</button>
                    </div>
                ))}
            </div>
            <Link to="/address">Proceed to Address</Link>
        </div>
    );
};

export default Cart;
