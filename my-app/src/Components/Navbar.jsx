
import React from "react";
import  {useState} from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";
import { Search_Users } from "./Utilis"
export const Navbar = () => {
    
    const [users, setUsers] = useState([]);
    const SearchUsers = (e)=>{
        
        setUsers(Search_Users (e.target.value, users));
       };
  return (
    <>
      <ul className="nav">
        <li>
          <img
            className="icon"
            src="https://www.ikea.com/us/en/static/ikea-logo.f7d9229f806b59ec64cb.svg"
          />
        </li>
  
        <h4 className="input">
          <input type="text" placeholder="What are you looking for"  
              onChange={SearchUsers}
          />
        </h4>
       
        <button className="sign">Login & Signup</button>
        <li>
          <img
            className="icon1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHiKoMx6NsyUydoSSclc61gc7HdMm9K1EDw&usqp=CAU"
          />
        </li>
      </ul>
      <hr></hr>
      <ul className="list1">
        <li className="list2">Product</li>
        <li className="list2">MarketPlace</li>
        <li className="list2">Rooms</li>
        <li className="list2">Design</li>
        <li className="list2">Deal</li>
      </ul>
    </>
  );
};

