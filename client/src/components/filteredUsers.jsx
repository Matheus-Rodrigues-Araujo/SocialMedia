import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faComments, faChartSimple } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"

export const FilteredUsers = ({postsList}) =>{
    const auth = useSelector(state => state.user.auth)
    const filteredUsers = postsList.filter(user => user._id !== auth.user._id)
    return (
        <ul className="posts-list" >
            {filteredUsers.map((e, key)=> (
                <li className='user' key={key}>
                    {/* <p className="username">@{e.username}</p> */}
                    <p className="username">@{e.title}</p>
                    <p>{e.desc}</p>
                    <div className="post-status">
                        <button className="likes" >
                            <FontAwesomeIcon icon={faHeart}/>{e.likes.length}
                        </button>
                        <button className="comments" >
                            <FontAwesomeIcon icon={faComments}/>12
                        </button>
                        <button className="views" >
                            <FontAwesomeIcon icon={faChartSimple}/>9
                        </button>
                    </div>
                </li>
            ))}
    </ul>
    )
}