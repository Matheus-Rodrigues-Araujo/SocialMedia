import { faBoltLightning,faSoccerBall, faHeadphones , faCamera } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link} from "react-router-dom"

export const Categories = () =>{
    return (
        <div className="categories">
          <h3>Trending</h3>
          <ul>
            <li>
                <FontAwesomeIcon icon={faSoccerBall} />
                <Link>Sports</Link>
            </li>

            <li>
                <FontAwesomeIcon icon={faCamera}/>
                <Link>Movies</Link>
            </li>
            
            <li>
              <FontAwesomeIcon icon={faHeadphones}/>
              <Link>Music</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faBoltLightning}/>
              <Link>Fitness</Link>
            </li>
          </ul>
      </div>
    )
}