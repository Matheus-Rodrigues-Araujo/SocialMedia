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
  
  const UserAuth = ({logout}) =>{
      return(
        <ul className='links-list' >
          <li>
            <div className='link-icon-conteiner'>
              <FontAwesomeIcon icon={faHome} />
              <Link to='/user/welcome'>Home</Link>
            </div>
          </li>
          <li>
            <div className="link-icon-conteiner">
              <FontAwesomeIcon icon={faHashtag}/>
              <Link to='/user/explore'>Explore</Link>
            </div>
          </li>
          <li>
            <div className="link-icon-conteiner">
              <FontAwesomeIcon icon={faPen}/>
              <Link to='/user/post'>Post</Link>
            </div>
          </li>
          <li>
            <div className='link-icon-conteiner'>
              <FontAwesomeIcon icon={faUserFriends} />
              <Link to='/user/friends'>Friends</Link>
            </div>
          </li>
          <li>
            <div className="link-icon-conteiner">
              <FontAwesomeIcon icon={faTools}/>
              <Link to='/user/settings'>Settings</Link>
            </div>
          </li>

          <li>
            <div className='link-icon-conteiner logout-conteiner'>
              <FontAwesomeIcon icon={faDoorOpen} />
              <button onClick={logout} className='logout-btn'>Logout</button>
            </div>
          </li>
        </ul>
      )
    }
  
  return (
    <header className="header">
      <nav className='navbar'>
        <div className='logo-conteiner' >
          <FontAwesomeIcon icon={faComment} />
          <Link to='/user/welcome' className='logo'>Talk Now!</Link>
        </div>
        <UserAuth logout={()=>{
            dispatch(disconnectUser())
            navigate('/')
        }}/>
      </nav>
    </header>
  )
}
