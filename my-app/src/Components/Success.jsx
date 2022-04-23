import React from "react"
import { Navbar } from "./Navbar"
import {Link} from "react-router-dom";
import "./Success.css"
export const Success = ()=>{
    return(
        <>
        <Navbar/>
            <div className="order">
          
           <h1 className = "order_details">Order Successful </h1>
           <h2 className="thank">Thank you so much for your order </h2>
           <Link to = "/"><button className="continue">Continue Shopping</button></Link>
            </div>
        </>
    )
}