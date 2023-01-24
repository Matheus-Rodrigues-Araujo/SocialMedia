import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Axios from "axios"
import { useEffect, useState } from "react"
export const Home = () =>{
  const auth = useSelector((state) => state.user.auth)
  const isLogged = useSelector((state)=> state.user.isLogged)
  const [usersList, setUsersList] = useState([])

  const serverConnection = () =>{
    const url = 'http://localhost:4000/api';
    const config= {'content-type': 'application/json'}
    Axios.get(url, config).then(res => {
      setUsersList(res.data)
    })
  }
  
  function AllUsers(){
    const filteredUsers = usersList.filter(user => user._id !== auth._id)
    
    return (
      <ul className="users-list" >
        {filteredUsers.map((e, key)=> (
          <li className='user' key={key}>
            <p className="username">@{e.username}</p>
            <p>Email: {e.email}</p>
          </li>
        ))}
      </ul>
    )
  }

  useEffect(()=>{
    serverConnection()
  }, [])

  
  const WelcomeUser = ({user}) =>{
    return (
      <div className="greetings" >
        <h1>Hello, {user.username}</h1>

        <p>It's always a pleasure to have you!</p>
      </div>
    )
  }

  const UserNotLoggedIn = () =>{
    return (
      <div className="notLogged">
        <h1>Must be Logged to access the App!</h1>
        <Link to='/login' className="link-btn">Login</Link>
      </div>
    )
  }

  const MainContent = () =>{
    return(
      <>
        <WelcomeUser user={auth}/>
        <h3 style={{fontSize: '1.5em'}}  >Dashboard</h3>
        <AllUsers/>
      </>
    )
  }

  return(
    <div className="home">
      {isLogged ? <MainContent /> : <UserNotLoggedIn/>}
    </div>
  )
}