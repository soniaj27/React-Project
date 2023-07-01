import React from "react";
import Home from "./components/Home";
import './App.css';
import { Route,Routes } from "react-router-dom";
import Cart from './components/Cart';
import Header from "./components/Header";
const App = () => {
    return(
        <>
        <div className="container">
        <Header />
        <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        </Routes>
        </div>
         </>   
    )
}

export default App;