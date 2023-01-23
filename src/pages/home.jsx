import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import Axios from "axios"
import { storeUsers } from "../features/user/userSlice"
import {usersData as usersList} from '../fakeData'
import { useEffect, useState } from "react"
export const Home = () =>{
  const auth = useSelector((state) => state.user.auth)
  const isLogged = useSelector((state)=> state.user.isLogged)
  const [usersList, setUsersList] = useState([])
  const dispatch = useDispatch()

  useEffect(()=> {console.log(usersList)},[])
  const serverConnection = async () =>{
    const url = 'http://localhost:4000/api';
    const config= {'content-type': 'application/json'}
    await Axios.get(url, config).then((res)=> setUsersList(res.data))
  }
  
  serverConnection()
  
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

  const AllUsers = () =>{
    // const usersList =
    return (
      <ul className="users-list" >
        {/* {console.log(usersList)} */}
        {/* {usersList.map((e, key)=> <li key={key}>{e.username}</li>)} */}
      </ul>
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
      {auth && isLogged ? <MainContent /> : <UserNotLoggedIn/>}
    </div>
  )
}