import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Axios from "axios"
import { useEffect, useState } from "react"
import { WelcomeUser } from "./welcome"
export const Home = () =>{
  const isLogged = useSelector((state)=> state.user.isLogged)
  const [usersList, setUsersList] = useState([])

  const serverConnection = () =>{
    const url = 'http://localhost:4000/api';
    const config= {'content-type': 'application/json'}
    Axios.get(url, config).then(res => {
      setUsersList(res.data)
    })
  }

  const UserNotLoggedIn = () =>{
    return (
      <div className="notLogged">
        <div className="message">
          <h1>Must be Logged to access the App!</h1>
        <Link to='/login' className="link-btn">Login</Link>
        </div>
      </div>
    )
  }

  useEffect(()=>{
    serverConnection()
  }, [])

  return(
    <div className="home">
      {isLogged ? <WelcomeUser usersList={usersList} /> : <UserNotLoggedIn/>}
    </div>
  )
}