import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faComments, faBookmark } from "@fortawesome/free-solid-svg-icons"
export const PostCard = ({post}) =>{
    return (
        <li className='post-card' key={post.name}>
            <p className="title">@{post.title}</p>
            <p className="description" >{post.desc}</p>
            <div className="post-status">
                <button className="like" title="Likes">
                    <FontAwesomeIcon icon={faHeart}/>{post.likes.length}
                </button>
                <button className="comments"  title="Comments">
                    <FontAwesomeIcon icon={faComments}/>
                </button>
                <button className="mark" title="Mark">
                    <FontAwesomeIcon icon={faBookmark}/>
                </button>
            </div>
            <div className="comment">
                <input type="text" className="comment-text"/>
                <input type="submit" value="Publish" className="publish-btn"/>
            </div>
        </li>
    )
}