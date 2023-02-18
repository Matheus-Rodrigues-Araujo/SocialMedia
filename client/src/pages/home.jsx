import { useSelector } from "react-redux"
import { SignIn } from "../forms/signin"
import { useNavigate } from "react-router-dom"
export const Home = () =>{
  const navigate = useNavigate()
  const auth = useSelector(state => state.user.auth)
  
  if(auth?.user){
    navigate('/user/welcome')
  }else{
    return(
      <div className="home">
        <div className="form-conteiner">
          <SignIn />
        </div>
      </div>
    )
  }
}