import { combineReducers } from "redux"
import {reducer} from "./reducer"
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import { applyMiddleware } from "redux"
const store =  createStore(reducer,applyMiddleware(thunk))

export {store}