
import axios  from "axios";
import {GET_TODOS, TODOS_ERROR, DELATE_TODO,COMPLATE_TODO, POST_TODOS, POST_ERROR} from '../types'

export const getTodos = (id) => async dispatch => {
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
        dispatch({
            type: GET_TODOS,
            payload: res.data
        });
     
    }catch(error){
        dispatch({
            type: TODOS_ERROR,
            payload: error
        })
        
    }
}

export const addTodo = (id, data) => async dispatch => {
    try{
        const res = await axios.post(`https://jsonplaceholder.typicode.com/users/${id}/todos`, data)
        dispatch({
            type: POST_TODOS,
            payload: res.data
        });
    }catch(error){
        dispatch({
            type: POST_ERROR,
            payload: error
        })
    }
}


export const deletTodo = (id) => dispatch =>{
    dispatch({
        type: DELATE_TODO,
        payload: id
    })

}
export const complateTodo = (id) => dispatch =>{
    dispatch({
        type: COMPLATE_TODO,
        payload: id
    })
}