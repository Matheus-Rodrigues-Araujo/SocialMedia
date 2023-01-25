import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { disconnectUser } from '../features/user/userSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

export const Header = () =>{
  const auth = useSelector(state => state.user.auth)
  const dispatch = useDispatch()
  
  const UserAuth = ({logout}) =>{
      return(
        <ul className='links-list auth' >
          <li>
            <FontAwesomeIcon icon="fa-solid fa-house" />
            <Link to='/'>Home</Link>
            </li>
          <li><Link to='/post'>Post</Link></li>
          <div className='profile-icon'>
            <div title={auth.username} >{auth.username[0]}</div>
          </div>
          <button onClick={logout} className='logout-btn'>Logout</button>
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
        <Link to='/' className='logo'>Talk App</Link>
        {auth ? <UserAuth logout={()=> dispatch(disconnectUser())} /> : <UserNotAuth/>}
      </nav>
    </header>
  )
}
