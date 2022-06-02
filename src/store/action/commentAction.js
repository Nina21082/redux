import axios from "axios"
import { COMMENTS_ERROR, GET_COMMENTS } from "../types"

 export const getComments = (id) => async dispatch => {

    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        dispatch({
            type: GET_COMMENTS,
            payload: res.data
        })
    }catch(error){
        dispatch({
            type: COMMENTS_ERROR,
            payload: error
        })
    }

 }