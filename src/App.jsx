import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Post } from "./pages/post";

function App() {
  return (
    <div className="App">
      <Router>
        <main className="main">
          <Header/>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/post' element={<Post />}/>
            </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
