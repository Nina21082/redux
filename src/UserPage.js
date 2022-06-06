import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./store/action/userAction";
import { Link } from "react-router-dom";

export const UserPage = () => {
    const dispatch = useDispatch()
    const userState = useSelector(state => state.users)
    const { users } = userState
    const{error} = userState
    const {loading} = userState

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])



    return(
        
        
        <>

        {loading &&
         <div>{loading}</div>}
        {error && <div className="alert" role="alert">
                <h4 className="alert-heading">{error}</h4>               
                <hr />
        </div>}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <p class="navbar-brand" ><b>About Users</b></p>
            </div>
     </nav>
        <div className="container">
        <div className="row">

        {users.map((user,index) => (



<div  className="col-3"> 

<div class="card mb-3">
  <div class="card-body">
  <img class="d-inline-block img-fluid mb-4" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="img" />
    <h5 class="card-title size"><b className="text">Name</b>: {user.name}</h5>
    <p class="text-secondary mb-2 size"><b className="text">Email</b>: {user.email}</p>
    <p class="text-muted font-size-sm size"><b className="text">Phone</b>: {user.phone}</p>
    <p className="size"><b className="text">Company</b>: {user.company.name}</p>
    <p className="size"><b className="text">Website</b>: {user.website}</p>
  </div>
  <div class="card-footer">
 <Link className='btn' to={`/user-todo/${user.id}`}>ShowTodos</Link>
<Link className="btn buuton" to={`/user-posts/${user.id}`}>Show Post</Link>
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


