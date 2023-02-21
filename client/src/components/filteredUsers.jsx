import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faComments, faBookmark } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"

export const FilteredUsers = ({postsList}) =>{
    const auth = useSelector(state => state.user.auth)
    const filteredUsers = postsList.filter(user => user._id !== auth.user._id)
    return (
        <ul className="posts-list" >
            {filteredUsers.map((e, key)=> (
                <li className='user' key={key}>
                    <p className="username">@{e.title}</p>
                    <p>{e.desc}</p>
                    <div className="post-status">
                        <button className="likes" >
                            <FontAwesomeIcon icon={faHeart}/>{e.likes.length}
                        </button>
                        <button className="comments" >
                            <FontAwesomeIcon icon={faComments}/>
                        </button>
                        <button className="views" >
                            <FontAwesomeIcon icon={faBookmark}/>
                        </button>
                    </div>
                </li>
            ))}
    </ul>
    )
}