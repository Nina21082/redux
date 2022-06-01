import { GET_POSTS, POSTS_ERROR } from "../types";

const initialState = {
    posts: []
}
export function postReducer(state = initialState, action){

    if(action.type === GET_POSTS){
        return{
            ...state,
            posts: action.payload
        }
    }else if(action.type === POSTS_ERROR){
        return{
            error: action.payload
        }
    }

    return state
}