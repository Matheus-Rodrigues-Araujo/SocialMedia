import { Link } from 'react-router-dom'
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
  const dispatch = useDispatch()
  
  const UserAuth = ({logout}) =>{
      return(
        <ul className='links-list auth' >
          <li>
            <div className='link-icon-conteiner'>
              <FontAwesomeIcon icon={faHome} />
              <Link to='/'>Home</Link>
            </div>
          </li>
          <li>
            <div className="link-icon-conteiner">
              <FontAwesomeIcon icon={faHashtag}/>
              <Link to='/explore'>Explore</Link>
            </div>
          </li>
          <li>
            <div className="link-icon-conteiner">
              <FontAwesomeIcon icon={faPen}/>
              <Link to='/post'>Post</Link>
            </div>
          </li>
          <li>
            <div className='link-icon-conteiner'>
              <FontAwesomeIcon icon={faUserFriends} />
              <Link to='/friends'>Friends</Link>
            </div>
          </li>
          <li>
            <div className="link-icon-conteiner">
              <FontAwesomeIcon icon={faTools}/>
              <Link to='/settings'>Settings</Link>
            </div>
          </li>
          <li>
            <div className="link-icon-conteiner">
              <FontAwesomeIcon icon={faMoon}/>
              <Link to='/theme'>Theme</Link>
            </div>
          </li>

          <li>
            <div className='link-icon-conteiner'>
              <FontAwesomeIcon icon={faUser} />
              <Link to='/profile'>Profile</Link>
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
  
  const UserNotAuth = () =>{
    return(
      <ul className='links-list'>
        <Link to='/' >Home</Link>
        <Link to='/register' >Register</Link>
        <Link to='/login' >Login</Link>
      </ul>
    )
  }

  return (
    <header className="header">
      <nav className='navbar'>
        <div className='logo-conteiner' >
          <FontAwesomeIcon icon={faComment} />
          <Link to='/' className='logo'>Talk Now!</Link>
        </div>
        {auth ? <UserAuth logout={()=> dispatch(disconnectUser())} /> : <UserNotAuth/>}
      </nav>
    </header>
  )
}
