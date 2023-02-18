import { Sidebar } from "../components/sidebar"
import { Outlet, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { NotAuthorized } from "./notAuthorized"
export const Main = () =>{
  const auth = useSelector(state => state.user.auth)
  const navigate = useNavigate()
  
  if(auth?.user){
    return(
      <main className="main" >
        <Sidebar />
        <Outlet/>
      </main>
    )
  }else{
    return <NotAuthorized/>
  }
}

