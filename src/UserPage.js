import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./store/action/userAction";
import { Link } from "react-router-dom";

export const UserPage = () => {
    const dispatch = useDispatch()
    const userState = useSelector(state => state.users)
    const { users } = userState
    const{error} = userState
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])



    return(
        
        
        <>
        {error && <div class="alert" role="alert">
                <h4 class="alert-heading">{error}</h4>               
                <hr />
        </div>}
        
        <div className="container">
        <div className="row">

        
        {users.map((user,index) => (

            
          <div className="col-4" key={index}>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title">Name: {user.name}</h5>
                    <p className="card-text">Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Company: {user.company.name}</p>
                    <p className="card-text"><small className="text-muted">Website: {user.website}</small></p>
                    <Link className='btn btn-success' to={`/user-todo/${user.id}`}>ShowTodos</Link>
                    <Link className="btn btn-danger" to={`/user-posts/${user.id}`}>Show Post</Link>
                </div>
                </div>
            </div>
        </div>
      </div>

            
    )
       
    )}

 </div>   
    </div>
        
        </>
    )
}


