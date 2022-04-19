import React from "react";
import {useEffect} from "react";
import {useDispatch,useSelector } from 'react-redux'
import {storeData,handleLoading,handleError, getData} from  "../Redux/action"
import { IS_LOADING } from "../Redux/actionType";


export const Product = ()=>{
    const dispatch = useDispatch();
    useEffect (() =>{
       dispatch(getData())
    },[])
   

    const loading = useSelector((state)=> state.isLoading)
    const productdata = useSelector((state)=> state.data)
    const error  = useSelector((state)=>state.isError)
    console.log(productdata)

    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1> Something went wrong</h1>
    }
    return(
        <div>
      <h1>hello i am arvind</h1>
        </div>
    )
}

