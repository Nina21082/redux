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
                      <div className="userPost">
                        <div class="row">
                            <div class="col-xs-12 col-sm-5 col-md-5 col-lg-4">
                                <div class="post-type">
                                <img class="d-inline-block img-fluid mb-2" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="img" />
                                </div>
                                <div class="author-info author-info-2">

                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-7 col-md-7 col-lg-8">
                                <div class="caption">
                                    <h4 class="md-heading">{post.title}</h4>
                                    <p>{post.body}</p>
                                   </div>
                            </div>
                            <button onClick={() => showComment(post.id)} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Comments
                       </button>
                        </div>
                       

                       
                       <div className={activePostId === post.id ? 'openComment' : 'closeComment' }>{comments.map((comment, index) => (
                            <div className="container" key={index}>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="people-nearby">
                                            <div className="nearby-user border border-3">
                                                <div className="row">
                                                <div className="col-md-2 col-sm-2">
                                                <img class="d-inline-block img-fluid mb-4" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="img" />
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
                         
                ))}
            </div>
        </div>
        </>
    )

}