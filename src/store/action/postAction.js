import axios from "axios";
import { GET_POSTS, POSTS_ERROR } from "../types";

export const getPosts = (id) => async dispatch => {
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: POSTS_ERROR,
            payload:error

        })
    }
}