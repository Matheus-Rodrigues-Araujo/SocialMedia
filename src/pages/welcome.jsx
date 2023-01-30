import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Axios from 'axios'
export const Welcome = () => {
    const auth = useSelector((state) => state.user.auth)
    const [usersList, setUsersList] = useState([])  
    const serverConnection = () =>{
        const url = 'http://localhost:4000/api';
        const config= {'content-type': 'application/json'}
        Axios.get(url, config).then(res => {
        setUsersList(res.data)
        })
    }
    const filteredUsers = usersList.filter(user => user._id !== auth._id)
    
    useEffect(()=>{
        serverConnection()
    }, [])
    return (
        <div className="main-content welcome" >
            <div className="greetings" >
                <h1>Hello, {auth.username}</h1>
                <p>It's always a pleasure to have you!</p>
            </div>
            <h3 style={{fontSize: '1.5em'}}  >Dashboard</h3>
            <ul className="users-list" >
                {filteredUsers.map((e, key)=> (
                    <li className='user' key={key}>
                    <p className="username">@{e.username}</p>
                    <p>Email: {e.email}</p>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}