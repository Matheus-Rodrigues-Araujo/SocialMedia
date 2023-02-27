import { useSelector} from "react-redux"
import { useEffect, useState } from "react"
import Axios from 'axios'
import { UsersPosts } from "../components/UsersPosts"

export const Welcome = () => {
    const [postsList, setPostsList] = useState(null)
    const auth = useSelector((state) => state.user.auth)

    const serverConnection = async () =>{
        const url = "http://localhost:4000/post/getAll"
        const config= {'content-type': 'application/json'}
        await Axios.get(url, config).then(res => {
            setPostsList(res.data.posts)
        })
        .catch(error => console.log(error))
    }

    useEffect(()=>{
        auth.user && serverConnection()
    },[])

    return (
        <div className="main-content welcome" >
            {postsList && <UsersPosts postsList={postsList} />}
        </div>
    )
}