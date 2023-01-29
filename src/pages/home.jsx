import { SignIn } from "../forms/signin"
import img1 from '../images/img1.jpg'

export const Home = () =>{

  return(
    <div className="home">
      <div className="home-content">
        <div className="home-greetings">
          <h3>The App of the moment !</h3>
          <p>Sign in to see what's everyone is talking!</p>
          <img className="first-img" src={img1} alt="something" />
        </div>

        <SignIn />
      </div>
    </div>
  )
}