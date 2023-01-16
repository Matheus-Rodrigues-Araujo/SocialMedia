import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const Home = () =>{
  const auth = useSelector((state) => state.users.auth)
  const usersList = useSelector((state)=>state.users.value)
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

  const AllUsers = () =>{
    console.log(usersList)
    return (
      <ul className="users-list" >
        {usersList.map((user, key)=>(
          <li className="user" key={key}>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </li>)
        )}
      </ul>
    )
  }

  const MainContent = () =>{
    return(
      <>
        <WelcomeUser user={auth}/>
        <AllUsers/>
      </>
    )
  }

  return(
    <div className="home">
      {auth ? <MainContent /> : <UserNotLoggedIn/>}
    </div>
  )
}