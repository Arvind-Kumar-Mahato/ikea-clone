import React from "react";
import './App.css';
import { Product } from './Components/Product';
import {Storage} from './Components/Home'
import { Navbar } from "./Components/Navbar";
import {Login} from "./Components/Login"
import {Cart} from "./Components/cart"
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
    {/* <Storage/>
      <Product/> */}
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Storage />} />
        <Route path="/about" element={<Login/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
