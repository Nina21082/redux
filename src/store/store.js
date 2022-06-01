import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import  combineReducers  from "./reducer/combineReducers";
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware = [thunk]

const initalState = {
      
}

export const store = createStore(combineReducers, initalState, composeWithDevTools(applyMiddleware(...middleware)))///







