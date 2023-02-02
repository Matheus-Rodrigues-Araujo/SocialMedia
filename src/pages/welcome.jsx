import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faComments, faChartSimple } from "@fortawesome/free-solid-svg-icons"
export const Welcome = () => {
    const auth = useSelector((state) => state.user.auth)
    const [usersList, setUsersList] = useState([])  
    const serverConnection = () =>{
        const url = 'http://localhost:4000/api';
        const config= {'content-type': 'application/json'}
        Axios.get(url, config).then(res => {
        setUsersList(res.data)
        })
    }
    const filteredUsers = usersList.filter(user => user._id !== auth._id)
    
    useEffect(()=>{
        serverConnection()
    }, [])
    return (
        <div className="main-content welcome" >
            <div className="greetings" >
                <h1>Hello, {auth.username}</h1>
            </div>
            <h3 style={{fontSize: '1.5em'}}  >Home page</h3>
            <ul className="posts-list" >
                {filteredUsers.map((e, key)=> (
                    <li className='user' key={key}>
                    <p className="username">@{e.username}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit augue nec ipsum pulvinar, id dignissim risus dictum. Duis quis posuere mauris, eget imperdiet augue. Etiam eget magna ut metus varius lobortis. Nullam mattis sit amet diam ut vehicula. Vestibulum feugiat mauris vel arcu dignissim, consectetur viverra sem sollicitudin. Cras vitae viverra nunc. Vivamus ultrices vehicula consectetur. Curabitur felis sem, auctor id ultrices et, dapibus quis metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas quis libero sit amet odio consectetur ultrices. Pellentesque nec congue elit. Morbi sodales arcu ornare vulputate venenatis.</p>
                    <div className="post-status">
                        <button className="likes" >
                            <FontAwesomeIcon icon={faHeart}/>5
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
            
        </div>
    )
}