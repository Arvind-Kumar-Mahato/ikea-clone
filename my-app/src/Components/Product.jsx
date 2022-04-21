import React from "react";
import {useEffect} from "react";
import {useDispatch,useSelector } from 'react-redux'
import {storeData,handleLoading,handleError, getData} from  "../Redux/action"
import { IS_LOADING } from "../Redux/actionType";
import "./product.css";
import {useState} from 'react';


export const Product = ()=>{
    
    const dispatch = useDispatch();
    useEffect (() =>{
       dispatch(getData())
    },[])
   

    const loading = useSelector((state)=> state.isLoading)
    const productdata = useSelector((state)=> state.data)
    const error  = useSelector((state)=>state.isError)
    console.log(productdata)

    //   const [search, setsearch] = useState("")

    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1> Something went wrong</h1>
    }
    return(
        <>
        {/* <input type = "text" placeholder = "search" onchange = {(e)=>setsearch(e.target.value)}/> */}
        <div className="card-container">
        {
            productdata.map((e)=>{
                return(
                    <>
                    <div className ="wrap" key = {e.id}>
                     <img className="image" alt = "" src = {e.img}/>

                      <h2>{e.title}</h2>
                      <h5>{e.sub_title}</h5>
                      <p>{e.price}</p>
                      <p>{e.available}</p>
                      <p>{e.runninglow}</p>

                      <p onClick={()=>{
         fetch(`http://localhost:3001/Tv_data${e.id}`)
          .then(({data})=>{
            dispatch((data))
             console.log(data);
            console.log("added")
           })
         
            }}><button className="card_button">Add to Bag</button></p>
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

