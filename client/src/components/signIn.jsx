import "./home.css"
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom"
import "./signIn.css"
const SignIn = ({ isMod }) => (
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
        <div className="signIn-form-container">
            <div className="signIn-form">
                <div className="signIn-label">Sign In</div>
                <div className="email"> Email:
                    <input className="input-email"></input>
                </div>
                <div className="password"> Password:
                    <input className="input-password"></input>
                </div>
                <div className="signIn-button"><button>Sign in</button>

                </div>

                <div className="create-account"><button>Create Account</button>

                </div>
            </div>
        </div>
    </>
)
export default SignIn