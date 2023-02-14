import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import Axios from 'axios'
import { FilteredUsers } from "../components/filteredUsers"

export const Welcome = () => {
    const [usersList, setUsersList] = useState(null)  
    const auth = useSelector((state) => state.user.auth)
    const data= [{id:1}, {id:2}]
    const serverConnection = async () =>{
        const url = "http://localhost:4000/user/findAll"
        const config= {'content-type': 'application/json'}
        await Axios.get(url, config).then(res => {
            setUsersList(res.data)
        })
        .catch(error => console.log(error))
    }
    useEffect(()=>{
        serverConnection()
    }, [])

    return (
        <div className="main-content welcome" >
            <div className="greetings" >
                <h1>Hello, {auth.username}</h1>
            </div>
            <h3 style={{fontSize: '1.5em'}}  >Home page</h3>
            
            {usersList && <FilteredUsers usersList={usersList} />}
            
        </div>
    )
}