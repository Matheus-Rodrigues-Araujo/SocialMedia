import { Sidebar } from "../components/sidebar"
import { Outlet } from "react-router-dom"

export const Main = () =>{

  return(
    <main className="main" >
      <Sidebar />
      <Outlet/>
    </main>
  )
}

