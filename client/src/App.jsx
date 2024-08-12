import { useState } from 'react'
import './App.css'
import Home from '../src/components/home'
import Barbers from "./components/barbers";
import SignIn from "./components/signIn.jsx";
import Cart from "./components/cart.jsx";
import ModeratorHome from './components/moderatorHome.jsx';
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom"

function App() {

  console.log("rrrr");
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/barbers" element={<Barbers />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
