
import React from "react"
import axios from 'axios';
import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react';
import "./Individual.css"
import { Navbar } from "./Navbar";
export const  Individual=()=>{
    const [showdata, SetshowData] = useState({})
    const [show, setShow] = useState(false)
    const {productid} = useParams();
    console.log(productid)
    axios.get('http://localhost:3001/Tv_data/2')
    .then(function (response) {
      SetshowData(response.data)
      console.log(response.data);
    })
    .catch(function (error) {
  
      console.log(error);
    })

    useEffect(()=>{
        axios.post('http://localhost:3001/cart',{
            ...showdata 
        })
    },[show])
    return(
        <>
        <Navbar/>
        <h1>Product Details</h1>
        <div className="container">
        <div  className="img">
        <img src = {showdata.img}/>
        <img src = "https://www.ikea.com/us/en/images/products/besta-tv-unit-with-doors-white-selsviken-high-gloss-white__0995911_pe821980_s5.jpg?f=xxs"/>
        <img src = "https://www.ikea.com/us/en/images/products/besta-tv-unit-with-doors-white-selsviken-high-gloss-white__1026887_pe834619_s5.jpg?f=xs"/>
        </div>

        <div className="box">
         <h1>{showdata.title}</h1>
         <p>{showdata.sub_title}</p>
         <h4>{showdata.price}</h4>
         <h1>Our take on wood</h1>
         <p>Wood is the material most commonly associated with IKEA furniture, and for good reasons. It’s renewable, recyclable, durable, ages beautifully and it is an important part of our Scandinavian design heritage. At IKEA, we believe that sourced in responsible way, wood is a key change driver for climate mitigation. In 2012, we set a goal that by 2020 our wood would be from more sustainable sources. We are happy to announce that we have reached this goal and today, more than 98% of the wood used for IKEA products is either FSC-certified or recycled.</p>
         <button onClick={()=>setShow(!show)}>Add to cart</button>
        </div>
        </div>
        <div>{showdata.title}</div>


        {/* <button onClick={()=>setShow(!show)}>Add to cart</button> */}
        </>
    )
}