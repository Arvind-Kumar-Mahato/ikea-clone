import { Search } from "react-router-dom"
import { store_Data,IS_LOADING,IS_ERROR,DELETE_DATA,TOTAL_AMOUNT,SEARCH} from "./actionType"



const initialState = {
    isLoading : false,
    isError : false,
    data : [],
    search_text:""

}

const reducer = (state= initialState,action)=>{
 switch(action.type){

    case IS_LOADING:
        return {...state, isLoading:true }
      

        case IS_ERROR:
        return {...state, isLoading:false, isError:true }


       case store_Data:
       return {...state, isLoading:false, data: action.payload}
        
       case SEARCH:
           return{...state, isLoading:false, data:action.payload}

      default:
          return state;
   }
 
}

export {reducer}