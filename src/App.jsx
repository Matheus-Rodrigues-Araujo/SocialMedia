import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addUser, filterUser, updateUsername, deleteUser} from "./features/user/userSlice";
// import uuid from 'react-uuid'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Post } from "./pages/post";
import Axios from 'axios'

function App() {
  
  const serverConnection = async () =>{
    await Axios.get('/api')
    .then((res) => {console.log(res.data)})
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
