import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Post } from "./pages/post";
import Axios from 'axios'

function App() {
  
  const serverConnection = async () =>{
    const url = 'http://localhost:4000/api';
    const config= {'content-type': 'application/json'}
    const response = await Axios.get(url, config)
    console.log(response.data)
  }
  
  serverConnection()
  

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/post' element={<Post />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
