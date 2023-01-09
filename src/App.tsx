import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { About } from './pages/about';
// import { Configuration } from './pages/configuration';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Register } from './pages/register';

import './styles/App.css';
import './styles/Header.css';
import './styles/Siderbar.css'
import './styles/Home.css'
import './styles/Login.css';
import './styles/Register.css';
function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Sidebar />
           {/*if user not authenticated, the Sidebar component won't be rendered  */}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register />}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
