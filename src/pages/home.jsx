import { useSelector } from "react-redux"

export const Home = () =>{
  const auth = useSelector((state)=> state.auth.isLoggedIn)
  const user = useSelector((state)=> state.user.value)
  const WelcomeUser = () =>{
    console.log(user)
    return (
      <div>
        <h1>Hello</h1>
        <p>It's always a pleasure!</p>
      </div>
    )
  }

  const UserNotLoggedIn = () =>{
    return (
      <div>
        <h1>Log in to be updated</h1>
      </div>
    )
  }

  return(
    <div className="home">
      {auth ? <WelcomeUser /> : <UserNotLoggedIn/>}
    </div>
  )
}