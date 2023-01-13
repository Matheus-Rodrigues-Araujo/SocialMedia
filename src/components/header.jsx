import {Link} from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { logout } from '../features/auth/authSlice'
export const links = [
  {
    name: 'Home',
    path: '/'
  },
  
  {
    name: 'Register',
    path: '/register'
  },
  {
    name: 'Login',
    path: '/login'
  }
]

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
         
          {/* { !auth ? 
            links.map((link, key) => (
            <li key={key} >
              <Link to={link.path} >{link.name}</Link>
            </li>)
            )
            :
            <UserLogged func={()=> dispatch(logout())}/>
          } */}
        </ul>
      </nav>
    </header>
  )
}

// module.exports = links