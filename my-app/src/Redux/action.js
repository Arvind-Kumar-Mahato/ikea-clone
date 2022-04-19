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


const getData = ()=>(dispatch)=> {
    dispatch(handleLoading())
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((res) => dispatch(storeData(res)))
    .catch((err) => dispatch(handleError()))
}
export {storeData,handleLoading,handleError,getData}