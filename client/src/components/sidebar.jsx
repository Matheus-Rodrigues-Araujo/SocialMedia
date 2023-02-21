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
  // const auth = useSelector(state => state.user.auth) 
  // const isLogged = useSelector(state => state.user.isLogged)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const logout = ()=>{
    dispatch(disconnectUser())
    // navigate('/')
  }

  const listItems = [
    {
      name: 'Home',
      icon: faHome,
      link: '/user'
    },
    {
      name: 'Explore',
      icon: faHashtag,
      link: '/user/explore'
    },
    {
      name: 'Post',
      icon: faPen,
      link: '/post'
    },
    {
      name: 'Friends',
      icon: faUserFriends,
      link: '/user/friends'
    },
    {
      name: 'Settings',
      icon: faTools,
      link: '/user/settings'
    },
    {
      name: 'Logout',
      icon: faDoorOpen,
      link: '/',
      action: logout
    },
  ]

  const SidebarLinks = ({logout}) =>{
      return(
        <ul className='links-list' >
          {
            listItems.map(item => {
              if(item?.action){
                return(
                  <Link key={item.name} to={item.link} onClick={logout} >
                    <div className='svg-link-conteiner' >
                      <FontAwesomeIcon icon={item.icon} />
                      <p>{item.name}</p>
                    </div>
                  </Link>
                )
              }else{
                return(
                  <Link key={item.name} to={item.link} >
                    <div className='svg-link-conteiner' >
                      <FontAwesomeIcon icon={item.icon} />
                      <p>{item.name}</p>
                    </div>
                  </Link>
                )
              }
            })
          }
        </ul>
      )
    }
  
return (
  <div className='sidebar'>
    <li className='logo-conteiner' >
      <FontAwesomeIcon icon={faComment} />
      <Link to='/user' className='logo-name'>Talk Now!</Link>
    </li>
    <SidebarLinks logout={()=>{
      dispatch(disconnectUser())
       navigate('/')
    }}/>
  </div>
  )
}
