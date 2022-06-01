import { combineReducers } from "redux"
import { userReducer } from "./userReducer"
import {postReducer} from './postReducer'
import { todoReducer } from "./todoReducer"

export default combineReducers ({
    users: userReducer,
    posts: postReducer,
    todos: todoReducer
    
 })