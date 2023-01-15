import "./styles/App.css"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, filterUser, updateUsername, deleteUser} from "./features/user/userSlice";
import uuid from 'react-uuid'


function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const filteredUser = useSelector((state)=> state.users.filteredUser)

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("")
  const [newUsername, setNewUsername ] = useState("");

  const UserMatch = ({user})=>{
    return (
      <div>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
      </div>
    )
  }

  return (
    <div className="App">
      {" "}
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: uuid(),
                name,
                username,
              })
            );
          }}
        >
          {" "}
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div className="user" key={user.id}>
              <h1>Name: {user.name}</h1>
              <h1>Username: {user.username}</h1>

              <input type="text" placeholder="New Username..."
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <button onClick={() => { dispatch(updateUsername({ id: user.id, username: newUsername }))} }>
                Update Username
              </button>

              <button onClick={()=> {dispatch(deleteUser({ id: user.id}))}}>
                Delete User
              </button>
             
            </div>
          );
        })}
      </div>

      <div className="filteredUser">
        <h1>&gt; Find user</h1>
        <div className="findUser">
          <input type="text" onChange={(e)=> setUser(e.target.value)}/>
          
          <button onClick={()=> dispatch(filterUser(user))}> Find </button>

          {userList.length >=1 && filteredUser && <UserMatch user={filteredUser} />}
        </div>
      </div>
    </div>
  );
}

export default App;

 {/* <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete User
              </button> */}