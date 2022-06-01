import { GET_USERS, USERS_ERROR } from "../types";

const initalState = {
    users: []
}
export function userReducer(state = initalState, action){
    if(action.type === GET_USERS){
        return{
            ...state, 
            users: action.payload,
        }

    }else if(action.type === USERS_ERROR){
        return{
            error: action.payload
        }
    }
    return state
}