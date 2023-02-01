import { SignIn } from "../forms/signin"
import img1 from '../images/img1.jpg'

export const Home = () =>{

  return(
    <div className="home">
      <div className="home-content">
        <SignIn />
      </div>
    </div>
  )
}