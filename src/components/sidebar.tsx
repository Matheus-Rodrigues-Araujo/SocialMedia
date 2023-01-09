import { links } from "./header"
import { Link } from "react-router-dom"
export const Sidebar = () =>{
  console.log(links)
  return (
    <div className="sidebar" >
      <h3>Your profile</h3>
      <div className="profile" >M</div>
      <Link to='/posts'>Posts</Link>
      <Link to='/friends'>Friends</Link>
      <Link to='/friends'>Friends</Link>
      <Link to='/settings' title="Settings">Settings</Link>
      <button>Logout</button>
    </div>
  ) 
}