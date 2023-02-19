import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
export const Logo = () => {
    return (
        <div className='logo-conteiner' >
            <FontAwesomeIcon icon={faComment} />
            <Link to='/user' className='logo'>Talk Now!</Link>
        </div>
    )
}
