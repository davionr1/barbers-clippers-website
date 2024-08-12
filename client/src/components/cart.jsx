import "./home.css"
import "./cart.css"
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom"
const Cart = ({ isMod }) => {
    const [isCart, isNotCart] = useState(null)
    return (
        <>
            <div className="navbar">
                <div className="title">
                    <Link to="/" className="link">Barbers & Clippers</Link>
                </div>
                <ul className="shop">
                    <li><Link to="/" className="link">Shop</Link></li>
                    <li><Link to="/barbers" className="link">Barbers</Link></li>
                </ul>
                {isMod && <div className="show-moderator">Mod View</div>}
                <ul className="icons">
                    <li><Link to="/signIn" className="link">Sign In</Link></li>
                    <li>
                        <input type="text" placeholder="Find our items and barbers" />
                    </li>
                    <li><Link to="/cart" className="link">cart</Link></li>
                </ul>
            </div>
            <div className="cart-container">
                {isCart ? (
                    <div className="cart">
                        <b>Cart</b>
                    </div>
                )
                    : (
                        <div className="cart">
                            <b>Cart is empty</b>
                        </div>
                    )
                }
                <div className="items">1 items:</div>
                <div className="cart-card">
                    <div className="cart-img"></div>
                    <div className="cart-description"></div>
                    <div className="cart-quantity">
                        <div className="cart-dropdown">
                            
                                <button className="dropdown-toggle" >
                                    Qty
                                </button>
                                <div class="cart-dropdown-menu" >
                                    <a className="dropdown-item">1</a>
                                    <a className="dropdown-item">2</a>
                                    <a className="dropdown-item">3</a>
                                    <a className="dropdown-item">4</a>
                                    <a className="dropdown-item">5</a>
                                </div>
                            </div>
                        </div>
                        <div className="cart-remove"><button>Remove</button></div>
                    
                </div>
            </div>
        </>
    )
}
export default Cart