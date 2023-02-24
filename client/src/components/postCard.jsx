import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faComments, faBookmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Axios from 'axios'
export const PostCard = ({post}) =>{
    const [likes, setLikes] = useState(null)
    const auth = useSelector(state => state.user.auth)
    const token = auth?.token

    const PostData = async ()=>{
        const postId = post._id
        const url=`http://localhost:4000/post/likeDislike/${postId}`
        const config={
          headers:{
            'authorization': `Bearer ${token}`,
            "content-type": "application/json"
          }
        }
  
        await Axios.put(url, {postId: postId},config)
        .then((res)=> {
            setLikes(res.data.likes)
        })
        .catch((error)=> console.log(error))
      }

      const checkLikes = ()=>{
        if(likes.length >=1){
            return likes
        }else{
            return 0
        }
      }

      useEffect(()=>{
        PostData()
      }, [])

    return (
        <li className='post-card' key={post.name}>
            <p className="title">@{post.title}</p>
            <p className="description" >{post.desc}</p>
            <div className="post-status">
                <button className="like" title="Likes" onClick={()=>PostData()}>
                    <FontAwesomeIcon icon={faHeart}/>{checkLikes}
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