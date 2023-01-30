import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { disconnectUser } from '../features/user/userSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHome, 
  faHashtag, 
  faComment, 
  faPen, 
  faTools, 
  faMoon,
  faDoorOpen,
  faUser,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons'

export const Sidebar = () =>{
  const auth = useSelector(state => state.user.auth)
  const isLogged = useSelector(state => state.user.isLogged)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const SidebarLinks = ({logout}) =>{
      return(
        <ul className='links-items' >
          <li>
            <FontAwesomeIcon icon={faHome} />
            <Link to='/user/welcome'>Home</Link>
          </li>
          <li>
              <FontAwesomeIcon icon={faHashtag}/>
            <Link to='/user/explore'>Explore</Link>
          </li>
          <li>
              <FontAwesomeIcon icon={faPen}/>
            <Link to='/user/post'>Post</Link>
          </li>
          <li>
              <FontAwesomeIcon icon={faUserFriends} />
            <Link to='/user/friends'>Friends</Link>
          </li>
          <li>
              <FontAwesomeIcon icon={faTools}/>
            <Link to='/user/settings' >Settings</Link>
          </li>

          <li>
              <FontAwesomeIcon icon={faDoorOpen} />
              <button onClick={logout} className='logout-btn'>Logout</button>
          </li>
        </ul>
      )
    }
  
return (
  <div className='sidebar'>
    <li className='logo-conteiner' >
      <FontAwesomeIcon icon={faComment} />
      <Link to='/user/welcome' className='logo-name'>Talk Now!</Link>
    </li>
    <SidebarLinks logout={()=>{
      dispatch(disconnectUser())
       navigate('/')
    }}/>
  </div>
  )
}
