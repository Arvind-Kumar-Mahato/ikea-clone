import React from "react"
import axios from 'axios';
import {useState} from 'react'
import {Link} from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useEffect } from "react";
import "./cart.css"
export const Cart= () => {
    // const [cartData,setCartData] = useState([])
    // axios.get(`http://localhost:3001/cart`)
    // .then(function (response) {
    //   setCartData(response.data)
    //   console.log(response.data);

    // })
    // .catch(function (error) {
  
    //   console.log(error);
    // })


    const [cartData, setCartData] = useState([]);

    useEffect(() =>{
        getCartData();
    },[])
    const getCartData = () =>{
        fetch("http://localhost:3001/cart")
        .then((res) => res.json())
        .then((data) => setCartData(data));
    }

    const deleteItem = (id) =>{
        fetch(`http://localhost:3001/cart/${id}`, {
        method: "DELETE",
        }).then(() => console.log("deleted"))

        const updated = cartData.filter((e) => e.id !== id);
        setCartData(updated);
    }

    const totalAmount = cartData.reduce((price,item) => price+item.price,0);






    return (
    <>
    <Navbar/>
{/* <div>   
       {
        cartData.map((item)=>{
               return(
                   <>
                   <div className = "cart">
                   <div>{item.title}</div>
                <img src={item.img} />
                </div>
                </>
               )
            
           })
       } 
       </div>   */}


       <div className="container1">
                <div>
                    {cartData.map((item,i) =>{
                        return (
                            <div className="container1_1">
                                <div>
                                    <img src={item.img} height="120px" width="120px" border="1px solid black" />
                                </div>
                                <div>
                                    <h5>{item.title}</h5>
                                    <h4>₹{item.price}</h4>
                                </div>
                                <div onClick={() => deleteItem(item.id)}>
                                    <h2>DELETE</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="container2">
                    <div><h3>Price Details</h3></div>
                    <div className="container2_1">
                        <div><h4>Product Charges</h4></div>
                        <div><h4>₹{totalAmount}</h4></div>
                    </div>
                    <div className="container2_1">
                        <div><h4>Delivery Charges</h4></div>
                        <div><h4>₹0</h4></div>
                    </div>
                    <div className="container2_1">
                        <div><h4>COD Charges</h4></div>
                        <div><h4>₹0</h4></div>
                    </div>
                    <hr/>
                    <div className="container2_1">
                        <div><h4>Order Total</h4></div>
                        <div><h4>₹{totalAmount}</h4></div>
                    </div>
                    <div>
                        <Link to ="/address">
                        <button>Continue</button>
                        </Link>
                    </div>
                </div>
            </div>





    </>

    )  
}