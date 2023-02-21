import { useSelector} from "react-redux"
import { useEffect, useState } from "react"
import Axios from 'axios'
import { FilteredUsers } from "../components/filteredUsers"

export const Welcome = () => {
    const [postsList, setPostsList] = useState(null)
    const auth = useSelector((state) => state.user.auth)

    const serverConnection = async () =>{
        const url = "http://localhost:4000/post/getAll"
        const config= {'content-type': 'application/json'}
        await Axios.get(url, config).then(res => {
            setPostsList(res.data)
        })
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        auth.user && serverConnection()
    },[])

    return (
        <div className="main-content welcome" >
            <div className="greetings" >
                <h1>Hello, {auth.user.username}</h1>
            </div>
            <p className="msg">See what's happening!</p>

            {postsList && <FilteredUsers postsList={postsList} />}
            
        </div>
    )
}