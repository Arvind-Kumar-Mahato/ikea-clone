import React from "react";
import {useEffect} from "react";
import {useDispatch,useSelector } from 'react-redux'
import {storeData,handleLoading,handleError, getData} from  "../Redux/action"
import { IS_LOADING } from "../Redux/actionType";
import "./product.css";
import {useState} from 'react';
import { Navbar } from "./Navbar";
import { useParams,useNavigate } from "react-router-dom";
import { Footer } from "./Footer";


export const Product = ()=>{
    const params = useParams();
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect (() =>{
       dispatch(getData())
    },[])
   

    const loading = useSelector((state)=> state.isLoading)
    const productdata = useSelector((state)=> state.data)
    const error  = useSelector((state)=>state.isError)
    console.log(productdata)




    
    const handleProductNavigate = (prodId)=>{
      

     Navigate(`/Tv_data/${prodId}`)
        //   Navigate(`/product/id`)
    }
   
     const [search, setsearch] = useState("")
      console.log(search)
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1> Something went wrong</h1>
    }
    return(
        
        <>
        <Navbar/>

        <input className="search" type = "text" placeholder = "search product name" onChange={(e)=>setsearch(e.target.value)}/>
        <div className="card-container">
        
        {
            productdata.filter((e)=>{
                if(search ===""){
                    return e
                }
                else{
                    return e.title.toLowerCase().includes(search.toLowerCase());
                }
            })
            .map((e)=>{
                return(
                    <>
                    <div className ="wrap" key = {e.id}  >
                     <img className="image" alt = "" src = {e.img}/>

                      <h2 onClick={()=>handleProductNavigate(e.id)}>{e.title}</h2>
                      <h5>{e.sub_title}</h5>
                      <p>₹{e.price}</p>
                      <p>{e.available}</p>
                      <p>{e.runninglow}</p>

                      {/* <p onClick={()=>{
         fetch(`http://localhost:3001/Tv_data${e.id}`)
          .then(({data})=>{
            dispatch((data))
             console.log(data);
            console.log("added")
           })
         
            }}><button className="card_button">Add to Bag</button></p> */}
                       </div>
                        {/* <img className = "product"src = {e.img} /> */}
                        
                    </>
                )
            })
           
        }
        
      
        
      
        </div>
         </>
    )
}

