import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
export const Logo = () => {
    const auth= useSelector(state => state.user.auth)
    
    return (
        <div className='logo-conteiner' >
            <FontAwesomeIcon icon={faComment} />
            <Link to={auth?.user ? '/user' : '/'} className='logo'>Talk Now!</Link>
        </div>
    )
}
