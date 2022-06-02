import { GET_USERS, USERS_ERROR } from "../types";

const initalState = {
    users: [],
    error: ''
}
export function userReducer(state = initalState, action){
    console.log(action)
    switch(action.type){
        case GET_USERS : {
            return{
                 ...state, 
            users: action.payload,
            error: ''
            }
        }
        case USERS_ERROR: {

             return{
            ...state,
            error: action.payload
        }
        }
        default: return state
    }
   
}