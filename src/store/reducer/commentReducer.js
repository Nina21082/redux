import { COMMENTS_ERROR, GET_COMMENTS } from "../types"

const initalState = {
    comments: []
}

export function commentReducer(state = initalState, action){
    switch(action.type){
        case GET_COMMENTS:{
            return{
                ...state,
                comments: action.payload
            }
        }case COMMENTS_ERROR:{
            return{
                ...state,
                error: action.payload
            }
        }
        default: return state

    }
}