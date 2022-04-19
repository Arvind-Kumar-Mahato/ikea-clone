import { store_Data,IS_LOADING ,IS_ERROR} from "./actionType"

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


const getData = ()=>(dispatch)=>{
    dispatch(handleLoading())
    fetch("http://localhost:3001/Tv_data")
    .then((res) => res.json())
    .then((res) => dispatch(storeData(res)))
    // .then((res)=>console.log(res))
    .catch((err) => dispatch(handleError()))
}
export {storeData,handleLoading,handleError,getData}