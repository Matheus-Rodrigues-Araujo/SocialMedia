import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const Home = () =>{
  const auth = useSelector((state) => state.users.auth)
  const userList = useSelector((state)=>state.users.value)
  const WelcomeUser = ({user}) =>{
    return (
      <div>
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


  return(
    <div className="home">
      {auth ? <WelcomeUser user={auth}/> : <UserNotLoggedIn/>}
    </div>
  )
}