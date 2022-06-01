
import axios  from "axios";
import {GET_TODOS, TODOS_ERROR} from '../types'

export const getTodos = (id) => async dispatch => {
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/user/${id}/todos`)
        dispatch({
            type: GET_TODOS,
            payload: res.data
        })
    }catch(error){
        dispatch({
            type: TODOS_ERROR,
            payload: error
        })
        
    }
}