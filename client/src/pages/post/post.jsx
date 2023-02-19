import {useForm} from 'react-hook-form'
import * as yup  from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Axios } from "axios"
import { useSelector } from "react-redux"
import { NotAuthorized } from "../errors/notAuthorized"
import { Logo } from '../../components/logo';
import { useNavigate, Link } from 'react-router-dom';
const schema = yup.object({
    title: yup.string().required('Title is required!').min(4).max(50),
    desc: yup.string().required('Description is required!').min(2).max(80)
})

export const Post = ()=>{
    const navigate = useNavigate()
    const auth = useSelector((state)=> state.user.auth)
    const token = auth?.token
    const { handleSubmit, register, formState:{errors} } = useForm({resolver: yupResolver(schema)})
    
    if(!auth?.user){
        return <NotAuthorized/>
    }

    const createPost = async (formValues)=>{
        // const url = 'http://localhost:4000/post'
        const { title, desc } = formValues
        const data = {
            title: title,
            desc: desc,
            userId: token
        }
        const config = {
            'headers': {"Authorization": `Bearer ${token}`},
            // 'content-type': 'application/json'
        }
        await Axios.post("http://localhost:4000/post", data, config)
        .then(()=> {
            navigate('/user')
        })
        .catch(error=> console.log(error))
    }

    return (
        <section className='post' >

            <form className="post-form" onSubmit={handleSubmit(createPost)}>
                <Logo/>
                <div className="content">
                    <h3>New post</h3>
                    <p className='author'>@{auth.user.username}</p>
                    <input type="text" className='title' placeholder='...Title' {...register('title')} />
                    {errors.title?.message && <p className='error-msg' >{errors.title.message}</p>}
                    <textarea cols="30" rows="10" className='description' placeholder="...Description" {...register('desc')} ></textarea>
                    {errors.desc?.message && <p className='error-msg' >{errors.desc.message}</p>}
                    
                    <div className="post-buttons-conteiner">
                    <Link to="/user" className='cancel-btn'>Cancel</Link>
                    <input type="submit" className='post-btn' value='Publish'/>
                    </div>
                </div>
            </form>
        </section>
    )
}