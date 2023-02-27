import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faComments, faBookmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Axios from 'axios'
export const PostCard = ({post}) =>{
    const auth = useSelector(state => state.user.auth)
    const token = auth?.token
    const [postInfo, setPostInfo] = useState({...post})
    const [isLoading, setIsLoading] = useState(false)
    const [likes, setLikes] = useState(null)
    const [color, setColor] = useState('white')
    

   useEffect(()=>{
      if(postInfo.likes){
        setLikes(postInfo?.likes.length)
      }
    },[])

    useEffect(()=>{
      updatePostData()
    }, [])

    const updatePostData = async () =>{
      const postId = postInfo._id
      const url=`http://localhost:4000/post/find/${postId}`
      const config={
        headers:{
          // 'authorization': `Bearer ${token}`,
          "content-type": "application/json"
        }
      }

      await Axios.get(url, config)
      .then((res)=> {
        setPostInfo(res.data.post)
      })
      .catch((error)=> console.log(error))
    }
 
    const likeUnlikePost = async ()=>{
        const postId = postInfo._id
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
          updatePostData()
        })
        .catch((error)=> console.log(error))
      }
    
    if(isLoading){
      return <>Loading...</>
    }else{
    return (
        <li className='post-card' key={postInfo.name}>
            <p className="title">@{postInfo.title}</p>
            <p className="description" >{postInfo.desc}</p>
            <div className="post-status">
                <button className="like" title="Likes" onClick={likeUnlikePost}>
                    <FontAwesomeIcon icon={faHeart}
                    style={
                      postInfo?.likes.includes(auth?.user._id) ? {color: 'orangered'} : {color: 'white'}
                    }
                    />
                      {likes}
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
}