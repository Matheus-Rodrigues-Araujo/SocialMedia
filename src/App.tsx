import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/header';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Register } from './pages/register';

import './styles/App.css';
import './styles/Header.css';
function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
