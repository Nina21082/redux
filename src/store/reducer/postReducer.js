import { GET_POSTS, POSTS_ERROR } from "../types";

const initialState = {
    posts: []
}
export function postReducer(state = initialState, action){

    switch(action.type){
        case GET_POSTS: {
            return{
            ...state,
            posts: action.payload
        }
        }
        case POSTS_ERROR: {
            return{
            error: action.payload
        }
        }
        default: return state
    }

}