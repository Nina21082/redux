import { GET_USERS, USERS_ERROR ,REQUEST_USER} from "../types";

const initalState = {
    users: [],
    error: '',
    loading: false
}
export function userReducer(state = initalState, action){
    console.log(action)
    switch(action.type){
            case REQUEST_USER: {
            return{
                ...state,
                loading: action.payload
            }
        }
        case GET_USERS : {
            return{
                 ...state, 
            users: action.payload,
            error: '',
            loading: false
            }
        }
        case USERS_ERROR: {

             return{
            ...state,
            error: action.payload,
            loading: false
        }
        }
    
        default: return state
    }
   
}