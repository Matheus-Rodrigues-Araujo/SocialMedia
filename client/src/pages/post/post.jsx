import {useForm} from 'react-hook-form'
import * as yup  from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Axios } from "axios"
import { useSelector } from "react-redux"
import { NotAuthorized } from "../errors/notAuthorized"
import { useState } from 'react';
import { Logo } from '../../components/logo';
const schema = yup.object({
    title: yup.string().required(),
    desc: yup.string().required().min(2).max(30)
})

export const Post = ()=>{
    const auth = useSelector((state)=> state.user.auth)
    const { handleSubmit, register, formState:{errors} } = useForm({resolver: yupResolver(schema)})
    
    if(!auth?.user){
        return <NotAuthorized/>
    }

    const createPost = async (formValues)=>{
        const url = 'http://localhost:4000/post'
        const {title, desc, likes, userId} = formValues
        const data = {
            title: title,
            desc: desc,
            userId: userId 
        }
        const config = {'content-type': 'application/json'}
        await Axios.post(url, data, config)
    }

    return (
        <section className='post' >

            <form className="post-form" onSubmit={handleSubmit()}>
                <Logo/>
                <div className="content">
                    <h3>New post</h3>
                    <p className='author'>@{auth.user.username}</p>
                    <input type="text" className='title' placeholder='...Title' />
                    <textarea cols="30" rows="10" className='description' placeholder="...Description" {...register('postText')} ></textarea>
                    
                    <div className="post-buttons-conteiner">
                    <input type="submit" className='cancel-btn' value='Cancel'/>
                    <input type="submit" className='post-btn' value='Publish'/>
                    </div>
                </div>
            </form>
            {/* <div className='post-preview'>
                <div className='appearance'>
                        <div className="card">

                        </div>
                </div>
            </div> */}
        </section>
    )
}