import { combineReducers } from "redux"
import { userReducer } from "./userReducer"
import {postReducer} from './postReducer'
import { todoReducer } from "./todoReducer"
import { commentReducer } from "./commentReducer"

export default combineReducers ({
    users: userReducer,
    posts: postReducer,
    todos: todoReducer,
    comments: commentReducer
    
 })