import { useSelector } from "react-redux"
import Axios from "axios"
import { useEffect, useState } from "react"
import { SignIn } from "../forms/signin"
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'

export const Home = () =>{
  // const isLogged = useSelector((state)=> state.user.isLogged)
  const [usersList, setUsersList] = useState([])
  // const images = [img2, img3,img4]

  // const serverConnection = () =>{
  //   const url = 'http://localhost:4000/api';
  //   const config= {'content-type': 'application/json'}
  //   Axios.get(url, config).then(res => {
  //     setUsersList(res.data)
  //   })
  // }

  // useEffect(()=>{
  //   serverConnection()
  // }, [])

  return(
    <div className="home">
      <div className="home-content">
        <div className="gallery">
          <h3>The App of the moment !</h3>
          <p>Sign in to see what's everyone is talking!</p>
          <img className="first-img" src={img1} alt="something" />
        </div>

        <SignIn />
      </div>
    </div>
  )
}