import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPosts } from "./store/action/postAction";




export const UserPost = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const postList = useSelector(state => state.posts)
    const {posts} =  postList
    useEffect(() => {
        dispatch(getPosts(id))
    }, [dispatch])

    return(
        <>
        <div className="container">
            <div className="row">
                {posts.map((post, index) => (
                <div className="col-9" key={index}>
                    <div className="accordion" id="accordionExample">
                     <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> {post.body}
                        </div>
                       <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                           User comments {post.id}
                       </button>              
                     </div>
                   </div>
                 </div> 
               </div>              
                ))}
            </div>
        </div>
        </>
    )

}