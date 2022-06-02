import {GET_TODOS, TODOS_ERROR, DELATE_TODO, COMPLATE_TODO, POST_TODOS} from '../types'
const initialState = {
    todos: []
}

export function todoReducer(state = initialState, action){
    switch (action.type) {
        case GET_TODOS: {
             return{
            ...state,
            todos: action.payload
        }
        }
         case TODOS_ERROR: {
        return{
            error: action.error
        }
         }
         case DELATE_TODO:{
             return{
            ...state,
            todos: state.todos.filter((item) => item.id !== action.payload.id)
        }
         }
         case COMPLATE_TODO: {
             return{
                 ...state,
                todos: state.todos.map(el => {
                    if(el.id === action.payload.id){
                        return{
                            ...el, completed : !el.completed
                        }
                    }
                    return el
                } )
             }
         }case POST_TODOS: {
             let todo = [...state.todos, {...action.payload, id: state.todos.length + 1 }]

             return{
                 ...state,
                 todos: todo,
             }
         }
         default: return state
       }
    }
    
    

