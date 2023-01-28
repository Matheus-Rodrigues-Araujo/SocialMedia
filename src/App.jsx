import { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Post } from "./pages/post";
import { NotFound } from "./pages/notFound";
import { WelcomeUser } from "./pages/welcome";

function App() {
  const isLogged = useSelector(state => state.user.isLogged)
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/welcome' element={<WelcomeUser />}/>
            <Route path='/post' element={<Post />}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
