import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'; 
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch } from 'react-redux';
// import { registerUser } from '../features/user/userSlice';
import {v4 as uuidv4} from 'uuid'
import {addUser} from '../features/user/userSlice'

const schema = yup.object({
  username: yup.string().required('Username is required!'),
  email: yup.string().required('Email is required!'),
  password: yup.string().required('Password is required!'),
  verifyPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match!').required('Password is required!')  
}).required()

export const Register = () =>{
  // const user = useAppSelector((state)=> state.user.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const user = useSelector(state => state.user.value)

  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit= (data) => {
    const {username, email, password} = data
    dispatch(addUser({
      id: uuidv4(),
      username,
      email,
      password
    }))
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

          <input type='submit' className="btn-styled" value='Login' />
        </div>
      </form>
    </section>
  )
}