import React from "react";
import './App.css';
import { Product } from './Components/Product';
import {Storage} from './Components/Home'
function App() {
  return (
    <div className="App">
    <Storage/>
      <Product/>
      
    </div>
  );
}

export default App;
