
import axios from "axios"
import {GET_USERS, USERS_ERROR, REQUEST_USER } from '../types'


export const  getUsers = () => async dispatch =>{
     dispatch({
         type: REQUEST_USER,
         payload: <div className="d-flex justify-content-center">
         <div className="spinner-border" role="status">
         </div>
       </div>

     })
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        dispatch( {
            type: GET_USERS,
            payload: res.data,
            loading: false
        })
    }
    catch(error){
        dispatch( {
            type: USERS_ERROR,
            payload: 'Error',
            loading: false

        })
    }
}

