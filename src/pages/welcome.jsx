import { useSelector } from "react-redux"
import { Sidebar } from "../components/sidebar"

export const WelcomeUser = ({usersList}) =>{
    const auth = useSelector((state) => state.user.auth)
    const filteredUsers = usersList.filter(user => user._id !== auth._id)
    return(
      <div className="welcome" >
        <Sidebar />
        
        <div className="welcome-content" >
          <div className="greetings" >
              <h1>Hello, {auth.username}</h1>
              <p>It's always a pleasure to have you!</p>
          </div>
          <h3 style={{fontSize: '1.5em'}}  >Dashboard</h3>
          <ul className="users-list" >
              {filteredUsers.map((e, key)=> (
                  <li className='user' key={key}>
                  <p className="username">@{e.username}</p>
                  <p>Email: {e.email}</p>
                  </li>
              ))}
          </ul>
        </div>
      </div>
    )
  }

