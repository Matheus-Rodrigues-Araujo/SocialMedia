import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'; 
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react';
import Axios from 'axios'
// import {v4 as uuidv4} from 'uuid'

const schema = yup.object({
  username: yup.string().required('Username is required!'),
  email: yup.string().required('Email is required!'),
  password: yup.string().required('Password is required!'),
  verifyPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match!').required('Password is required!')  
}).required()

export const Register = () =>{

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  })

  const postRequest = async (user)=>{
    await fetch('http://localhost:4000/api/register',{
      method: "POST",
      mode: 'cors',
      body: JSON.stringify(user),
      headers: {"Content-Type": "application/json"}
    })
    .catch((err)=> {
      console.log(err)
      return
    })
  }

  const navigate = useNavigate()

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit= (data) => {
    data = {...form}
    postRequest(data)
    navigate('/login')
  }

  const updateForm = (value)=>{
    return setForm((prev)=>{
      return {...prev, ...value}
    })
  }

  return(
    <section className="conteiner">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Welcome</h1>
        
        <div className="fields" >
        
        <label>
            Username
            <input 
            type='text' 
            placeholder="...Username" 
            {...register('username')}
            value={form.username}  
            onChange={(e)=> updateForm({"username": e.target.value})}
            />
            {errors.username?.message ? <p className='error-msg' >{errors.username?.message}</p>: <></>}
          </label>
        
          <label>
            Email
            <input 
            type='text' 
            placeholder="...Email" 
            {...register('email')}
            value={form.email}  
            onChange={(e)=> updateForm({"email": e.target.value})}
            />
            {errors.email?.message ? <p className='error-msg' >{errors.email?.message}</p>: <></>}
          </label>

          <label>
            Password
            <input 
            type='password'
            placeholder="...Password"  
            {...register('password')}
            value={form.password}  
            onChange={(e)=> updateForm({"password": e.target.value})}
            />
            {errors.password?.message ? <p className='error-msg' >{errors.password?.message}</p>: <></>}
          </label>

          <label>
            Verify password
            <input 
            type='password' 
            placeholder="...Verify password"
            {...register('verifyPassword')}
            />
            {errors.verifyPassword?.message ? <p className='error-msg' >{errors.verifyPassword?.message}</p>: <></>}
          </label>

          <input 
          type='submit'
          className="btn-styled"
          value='Login'
           />
        </div>
      </form>
    </section>
  )
}