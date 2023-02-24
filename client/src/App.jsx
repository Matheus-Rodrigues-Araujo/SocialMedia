// import { useEffect, useState } from "react";
// import { useSelector} from "react-redux";
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
import { Home } from "./pages/home";
import { Register } from "./forms/signup";
import { Post } from "./pages/post/post";
import { NotFound } from "./pages/errors/notFound";
import { Main } from "./pages/main";
import { Settings } from "./pages/settings";
import { Explore } from "./pages/explore";
import { Profile } from "./pages/profile/profile";
import { Theme } from "./pages/theme";
import { Welcome } from './pages/welcome';
import { Friends } from './pages/friends';
import { useSelector, useDispatch } from 'react-redux';
import { authenticateUser } from './features/user/userSlice';
import { useEffect } from 'react';

function App() {
  const localToken = JSON.parse(localStorage.getItem('user'))
  // const auth = useSelector((state) => state.user.auth)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    if(localToken){
      dispatch(authenticateUser(localToken))
    }
  }, [])

  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={<Register />}/>

            <Route path='/user' element={<Main />}>
              <Route index element={<Welcome />}/>
              <Route path='explore' element={<Explore />}/>
              <Route path='settings' element={<Settings />}/>
              <Route path='theme' element={<Theme />}/>
              <Route path='friends' element={<Friends />}/>
            </Route>
            
            <Route path='/profile' element={<Profile/>} />

            <Route path='/post' >
              <Route index element={<Post />} ></Route>
            </Route>

            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;