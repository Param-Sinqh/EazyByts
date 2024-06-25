import React from 'react';
import { Link } from 'react-router-dom';
import './css/Cart.css';
import CustomDietLogo from './CustomDietLogo';

const Cart = ({ cart, updateCart, clearCart }) => {
    const handleQuantityChange = (item, quantity) => {
        updateCart(item, quantity);
    };

    return (
        <div className='cartPage'>
            <div className='cart-container'>
                <button className='clear-cart' onClick={clearCart}>Remove all</button>
                <div className='cart-items'>
                    {cart.map((item, index) => (
                        <div key={index} className='cart-item'>
                            <table>
                                <tr>
                                    <td>

                                    </td>
                                </tr>
                            </table>
                            <img src={item.image} alt={item.name} className='cart-item-image' />
                            <div className='cart-item-details'>
                                <div>
                                    <div className='name-diet'>
                                        <h2>{item.name}</h2>
                                        <div className='diet-stamp'>
                                            <div className='dietIcon'>
                                                {item.veg ? <CustomDietLogo fill={"#12b800"} /> : <CustomDietLogo fill={"#b80000"} />}
                                            </div>
                                            {item.veg ? <p style={{ color: '#12b800' }}>Veg</p> : <p style={{ color: '#b80000' }}>Non Veg</p>}
                                        </div>
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                                <div className='cart-item-quantity'>
                                    <button onClick={() => handleQuantityChange(item, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item, item.quantity + 1)}>+</button>
                                </div>
                                <p className='cart-item-price'>${item.price.toFixed(2)}</p>
                                <div className='cart-item-actions'>
                                    <button className='remove-item' onClick={() => handleQuantityChange(item, 0)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='cart-summary'>
                    <h3>Sub-Total</h3>
                    <p>{cart.reduce((acc, item) => acc + item.quantity, 0)} items</p>
                    <h3>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h3>
                    <Link to="/address" className='checkout-button'>Checkout</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
