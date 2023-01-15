import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addUser, filterUser, updateUsername, deleteUser} from "./features/user/userSlice";
// import uuid from 'react-uuid'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

function App() {
  // const dispatch = useDispatch();
  // const userList = useSelector((state) => state.users.value);
  // const filteredUser = useSelector((state)=> state.users.filteredUser)

  // const [name, setName] = useState("");
  // const [username, setUsername] = useState("");
  // const [user, setUser] = useState("")
  // const [newUsername, setNewUsername ] = useState("");

  return (
    <div className="App">
      <Router>
        <Header/>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
