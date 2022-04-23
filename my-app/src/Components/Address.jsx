import React from "react"
import "./Address.css"
import { Navbar } from "./Navbar"
import {Link} from "react-router-dom";
export const  Address = ()=>{
    return(
        <>
        <Navbar/>
        <div className="box1">
        <h1 className="detail">
        Where should we send your order?
        </h1>
        <div className="user_detail">
        <h3>First Name</h3>
        <input type = "text" placeholder="Enter Your First Name"/>
        <h3>Last Name</h3>
        <input type = "text" placeholder="Enter Your Last Name"/>
        <h3>Email Address</h3>
        <input type = "text" placeholder="Enter Your Email"/>
        <Link to = "/success"><div className="button"><button>Continue</button></div></Link>
        </div>
       
        </div>
        </>
    )
}