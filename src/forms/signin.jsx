import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup  from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch} from 'react-redux';
import Axios from 'axios';
import { authenticateUser } from '../features/user/userSlice';
import { Logo } from '../components/logo';
import { useState } from 'react';
const schema = yup.object({
  email: yup.string().required('Email is required!'),
  password: yup.string().required('Password is required!')
}).required()

export const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register,handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(schema)})

  const onSubmit = async (formValues) =>{
    const {email, password} = formValues
    const url = "http://localhost:4000/api/login"
    const data = {email: email, password: password}
    const config = {'content-type': 'application/json'}
    
    await Axios.post(url, data, config)
    .then(res=>{
      dispatch(
        authenticateUser(res.data)
      )
    }).then(()=> navigate('/welcome'))
    .catch(error =>{
      console.log(error)
    }) 
  }

  return(
    <div className='login-conteiner'>
      <form className="login-form"
        onSubmit={handleSubmit(onSubmit)}>
        <Logo />
        <h1>Sign in</h1>
        
        <div className="fields" >
          <label>
            {/* Email */}
            <input type='text' placeholder="...Email" {...register('email')}/>
            <p className='error-msg' >{errors.email?.message}</p>
          </label>

          <label>
            {/* Password */}
            <input type='password' placeholder="...Password" {...register('password')} />
            <p className='error-msg' >{errors.password?.message}</p>
          </label>

          <input type='submit' className="btn-styled" value='Login' />
        </div>
      </form>
      <div className='help-conteiner' >
          <Link to="/register" className='forgot-password' >Forgot password?</Link>
      </div>
      <div className='help-conteiner' >
          <p className='create-account-link' >Don't have an account? <Link to="/register"> Create account</Link></p>
      </div>
  </div>
  )
}