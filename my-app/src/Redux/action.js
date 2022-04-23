import { store_Data,IS_LOADING ,IS_ERROR,DELETE_DATA,TOTAL_AMOUNT} from "./actionType"

const storeData = (payload) =>({
    type: store_Data,
    payload
})


const handleLoading = () =>({
    type: IS_LOADING,

})

const handleError = () =>({
    type: IS_ERROR,

})
export const totalAmount=(payload)=>{
    return{
        type:TOTAL_AMOUNT,
        payload,
    };
}
    export const deleteData=(payload)=>{
        return{
            type:DELETE_DATA,
            payload,
        };
    };

    // export const Id =(payload)=>{
    //     return {
    //         type:ID,
    //         payload
    //     }
    // }


const getData = ()=>(dispatch)=>{
    dispatch(handleLoading())
   
    fetch("http://localhost:3001/Tv_data")
    .then((res) => res.json())
    .then((res) => dispatch(storeData(res)))
    // .then((res)=>console.log(res))
    .catch((err) => dispatch(handleError()))
}
export {storeData,handleLoading,handleError,getData}