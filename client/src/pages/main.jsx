import { Sidebar } from "../components/sidebar"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { NotAuthorized } from "./errors/notAuthorized"
import { UserProfile } from "../components/userProfile"
export const Main = () =>{
  const auth = useSelector(state => state.user.auth)
  // const navigate = useNavigate()
  
  if(auth?.user){
    return(
      <main className="main" >
        <Sidebar />
        <Outlet/>
        <UserProfile/>
      </main>
    )
  }else{
    return <NotAuthorized/>
  }
}

