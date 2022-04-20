import React from "react";
import './App.css';
import { Product } from './Components/Product';
import {Storage} from './Components/Home'
import { Navbar } from "./Components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
    {/* <Storage/>
      <Product/> */}
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Storage />} />
        {/* <Route path="about" element={<Navbar/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
