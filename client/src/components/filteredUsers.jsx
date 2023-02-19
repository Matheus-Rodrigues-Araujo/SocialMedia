import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faComments, faChartSimple } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"

export const FilteredUsers = ({postsList}) =>{
    console.log(postsList)
    const auth = useSelector(state => state.user.auth)
    const filteredUsers = postsList.filter(user => user._id !== auth.user._id)
    return (
        <ul className="posts-list" >
            {filteredUsers.map((e, key)=> (
                <li className='user' key={key}>
                    {/* <p className="username">@{e.username}</p> */}
                    <p className="username">@{e.title}</p>
                    <p>id dignissim risus dictum. Duis quis posuere mauris, eget imperdiet augue. Etiam eget magna ut metus varius lobortis. Nullam mattis sit amet diam ut vehicula. Vestibulum feugiat mauris vel arcu dignissim, consectetur viverra sem sollicitudin. Cras vitae viverra nunc. Vivamus ultrices vehicula consectetur. Curabitur felis sem, auctor id ultrices et, dapibus quis metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas quis libero sit amet odio consectetur ultrices. Pellentesque nec congue elit. Morbi sodales arcu ornare vulputate venenatis.</p>
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