import { faMoon, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link} from "react-router-dom"
export const RightSidebar = () =>{
    return (
        <div className="right-sidebar" >
        <ul>
          <li>
          {/* <div className='link-icon-conteiner'> */}
            <div>
              <FontAwesomeIcon icon={faUser} />
              <Link to='/user/profile'>Profile</Link>
            </div>
          </li>

          <li>
            <div>
              <FontAwesomeIcon icon={faMoon}/>
              <Link to='/user/theme'>Theme</Link>
            </div>
          </li>
        </ul>
      </div>
    )
}