import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import Axios from 'axios'
import { Sidebar } from "../components/sidebar"
import { faMoon, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, Outlet } from "react-router-dom"
import { Welcome } from "./welcome"

export const Main = () =>{
  const auth = useSelector((state) => state.user.auth)
  const [usersList, setUsersList] = useState([])  
  const serverConnection = () =>{
    const url = 'http://localhost:4000/api';
    const config= {'content-type': 'application/json'}
    Axios.get(url, config).then(res => {
      setUsersList(res.data)
    })
  }
  const filteredUsers = usersList.filter(user => user._id !== auth._id)
  
  useEffect(()=>{
    serverConnection()
  }, [])

  return(
    <main className="main" >
      <Sidebar />
      <Outlet/>
      
      {/* <div className="right-sidebar" >
        <ul className="links-list">
          <li>
            <div className='link-icon-conteiner'>
              <FontAwesomeIcon icon={faUser} />
              <Link to='/profile'>Profile</Link>
            </div>
          </li>

          <li>
            <div className="link-icon-conteiner">
              <FontAwesomeIcon icon={faMoon}/>
              <Link to='/theme'>Theme</Link>
            </div>
          </li>
        </ul>
      </div> */}
    </main>
  )
}

