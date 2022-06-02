import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPosts } from "./store/action/postAction";
import { getComments } from "./store/action/commentAction";




export const UserPost = () => {

    const [activePostId, setactivePostId] = useState(null)
    const {id} = useParams()
    const dispatch = useDispatch()
    const postList = useSelector(state => state.posts)
    const commentList = useSelector(state => state.comments)
    const {comments} = commentList
    const {posts} =  postList
    useEffect(() => {
        dispatch(getPosts(id))
    }, [dispatch])

    const showComment = (id) => {
        console.log(activePostId)
        if(activePostId === id){
            setactivePostId(null)
            return
        }
        dispatch(getComments(id))
        setactivePostId(id)
    }
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
                       <button onClick={() => showComment(post.id)} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                           User comments {post.id}
                       </button>
                       <div className={activePostId === post.id ? 'openComment' : 'closeComment' }>{comments.map((comment, index) => (
                            <div className="container" key={index}>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="people-nearby">
                                            <div className="nearby-user border border-3">
                                                <div className="row">
                                                <div className="col-md-2 col-sm-2">
                                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png" alt="user" className="profile-photo-lg" />
                                                </div>
                                                <div className="col-md-8 col-sm-8">
                                                    <h5>{comment.name}</h5>
                                                    <p>{comment.email}</p>
                                                    <p className="text-muted">{comment.body}</p>
                                                </div>
                                                </div>        
                                                </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                        ))}
                       </div>              
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