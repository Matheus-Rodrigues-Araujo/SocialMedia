import {useForm} from 'react-hook-form'
import * as yup  from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Axios } from "axios"
import { useSelector } from "react-redux"
import { NotAuthorized } from "./notAuthorized"

const schema = yup.object({

})

export const Post = ()=>{
    const auth = useSelector((state)=> state.user.auth)
    const { handleSubmit, register, formState:{errors} } = useForm({resolver: yupResolver(schema)})
    
    if(!auth?.user){
        return <NotAuthorized/>
    }

    const createPost = async (formValues)=>{
        const url = 'http://localhost:4000/user/post'
        const {title, desc, likes, userId} = formValues
        const data = {
            title: title,
            desc: desc,
            likes: likes,
            userId: userId 
        }
        const config = {'content-type': 'application/json'}
        await Axios.post(url, data, config)
    }

    return (
        <form className="main-content post" onSubmit={handleSubmit()}>
           
            <h3>Your post</h3>
            <textarea cols="30" rows="10" placeholder="...Comment something here" {...register('postText')} ></textarea>

            <input type="submit" value='Publish' className="btn-styled" />
        </form>
    )
}