import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'; 
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
interface RegisterInputs{
  username: string;
  email: string;
  password: string;
  verifyPassword: string;  
}

const schema = yup.object({
  username: yup.string().required('Username is required!'),
  email: yup.string().required('Email is required!'),
  password: yup.string().required('Password is required!'),
  verifyPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match!').required('Password is required!')  
}).required()

export const Register = () =>{
  const navigate = useNavigate()

  const {register, handleSubmit, formState:{errors}} = useForm<RegisterInputs>({
    resolver: yupResolver(schema)
  })

  const onSubmit= (data:RegisterInputs) => {
    console.log(data)
    alert('You have been registered!')
    navigate('/login')
  }

  return(
    <section className="conteiner">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1>Welcome</h1>
        
        <div className="fields" >
        
        <label>
            Username
            <input type='text' placeholder="...Username" {...register('username')}/>
            {errors.username?.message ? <p className='error-msg' >{errors.username?.message}</p>: <></>}
          </label>
        
          <label>
            Email
            <input type='text' placeholder="...Email" {...register('email')}/>
            {errors.email?.message ? <p className='error-msg' >{errors.email?.message}</p>: <></>}
          </label>

          <label>
            Password
            <input type='password' placeholder="...Password"  {...register('password')}/>
            {errors.password?.message ? <p className='error-msg' >{errors.password?.message}</p>: <></>}
          </label>

          <label>
            Verify password
            <input type='password' placeholder="...Verify password" {...register('verifyPassword')} />
            {errors.verifyPassword?.message ? <p className='error-msg' >{errors.verifyPassword?.message}</p>: <></>}
          </label>

          <input type='submit' className="submit-btn" value='Login' />
        </div>
      </form>
    </section>
  )
}