import { useState, useEffect } from "react";
import "./home.css"
import Cards from "./itemCards.jsx";
import Barbers from "./barbers.jsx";
import SignIn from "./signIn.jsx";
import Cart from "./cart.jsx";

import { BrowserRouter, Routes, Route, Link, } from "react-router-dom"
const password = import.meta.env.VITE_PASSWORD

const Home = () => {

    const [isMod, setIsMod] = useState(false)

    const welcome = () => (
        <div className="welcome-container">
            <div className="welcome-screen">Barbers & Clippers</div>
            <img src="https://i.fbcd.co/products/original/80d7375029a4eba76d03daf9b1df679749174344f61e2af98423253ff1025529.jpg" />
        </div>
        
    )

    const IfUserIsMod = (e) => {
        const input = e.target.value
        if (input === password) {
            console.log("is mod");
            setIsMod(true)
        }
        else {
            console.log("not mod");
            setIsMod(false)
        }

    }
    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     IfUserIsMod(e)
    // }
    
        return (
            <div>
                <>
                    <div className="container">
                        {welcome()}

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
                        <div className="home-background">
                            <div className="current-page">Shop</div>
                            <div className="cards-section">
                                {isMod ? <Cards isMod={true} /> : <Cards />}
                            </div>
                        </div>
                    </div>
                </>
            </div >
        )
    
    
}
export default Home 