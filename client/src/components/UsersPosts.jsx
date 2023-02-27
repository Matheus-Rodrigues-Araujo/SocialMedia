import { useSelector } from "react-redux"
import { PostCard } from "./postCard"

export const UsersPosts = ({postsList}) =>{
    const auth = useSelector(state => state.user.auth)
    const filteredPosts = postsList.filter(user => user._id !== auth.user._id)
    console.log(filteredPosts)
    return (
        <ul className="posts-list" >
            {filteredPosts.map((post, key)=> (
              <PostCard post={post} key={key}/>
            ))}
    </ul>
    )
}