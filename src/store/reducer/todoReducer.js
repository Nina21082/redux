import {GET_TODOS, TODOS_ERROR} from '../types'
const initialState = {
    todos: []
}

export function todoReducer(state = initialState, action){
    if(action.type === GET_TODOS){
        return{
            ...state,
            todos: action.payload
        }
    }else if(action.type === TODOS_ERROR){
        return{
            error: action.error
        }
    }
    return state

}