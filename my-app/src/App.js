import React from "react";
import './App.css';
import { Product } from './Components/Product';
import {Storage} from './Components/Home'
import { Navbar } from "./Components/Navbar";
import {Login} from "./Components/Login"
import {Cart} from "./Components/Cart"
import { Routes, Route, Link } from "react-router-dom";
import {Individual} from "./Components/Individual"
import { useParams,useNavigate } from "react-router-dom";
import { Address } from "./Components/Address";
import { Success } from "./Components/Success";
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
        {/* <Route path="/product/id" element={<Individual/>} /> */}
        <Route path="/Tv_data/:id" element={<Individual/>} />
        <Route path="/address" element={<Address/>} />
        <Route path="/success" element={<Success/>} />

      </Routes>
    </div>
  );
}

export default App;
