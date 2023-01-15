import { Link } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { logout } from '../features/auth/authSlice'

// const UserLogged = ({func}) =>{
//   return(
//     <ul className='links-list' >
//       <li><Link to='/'>Home</Link></li>
//       <button onClick={func}>Logout</button>
//     </ul>
//   )
// }

export const Header = () =>{
  // const auth = useSelector(state => state.auth.isLoggedIn)
  // const dispatch = useDispatch()
  return (
    <header className="header">
      <nav className='navbar'>
        <Link to='/' className='logo' >Talk App</Link>
        <ul className='links-list'>
          <Link to='/' >Home</Link>
          <Link to='/register' >Register</Link>
          <Link to='/login' >Login</Link>

        </ul>
      </nav>
    </header>
  )
}

// module.exports = links