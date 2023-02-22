import { useSelector } from "react-redux"
import { useNavigate, Link} from "react-router-dom"
export const UserProfile = () =>{
    const auth = useSelector(state => state.user.auth)
    const navigate = useNavigate()
    return (
        <div className="user-profile">
            <div className="profile-card" onClick={()=> navigate('/user')}>
                <div className="icon">{auth.user.username[0].toUpperCase()}</div>
                <p className="name"><span>@</span>{auth.user.username}</p>
            </div>
            <Link to='/profile' className="edit-link" >Edit Profile</Link>
        </div>
    )
}