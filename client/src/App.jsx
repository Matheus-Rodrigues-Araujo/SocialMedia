// import { useEffect, useState } from "react";
// import { useSelector} from "react-redux";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from "./pages/home";
import { Register } from "./forms/signup";
import { Post } from "./pages/post";
import { NotFound } from "./pages/notFound";
import { Main } from "./pages/main";
import { Settings } from "./pages/settings";
import { Explore } from "./pages/explore";
import { Profile } from "./pages/profile";
import { Theme } from "./pages/theme";
import { Welcome } from './pages/welcome';
import { Friends } from './pages/friends';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={<Register />}/>

            <Route path='/user' element={<Main />}>
              <Route path='welcome' element={<Welcome />}/>
              <Route path='explore' element={<Explore />}/>
              <Route path='post' element={<Post />}/>
              <Route path='settings' element={<Settings />}/>
              <Route path='profile' element={<Profile />}/>
              <Route path='theme' element={<Theme />}/>
              <Route path='friends' element={<Friends />}/>
            </Route>
            
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
// Routes: explore, post, friends, settings, profile, theme