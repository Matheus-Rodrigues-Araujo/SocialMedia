import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup  from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useSelector, useDispatch} from 'react-redux';
import Axios from 'axios';
import { authenticateUser } from '../features/user/userSlice';

const schema = yup.object({
  email: yup.string().required('Email is required!'),
  password: yup.string().required('Password is required!')
}).required()

export const Login = () => {
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
    }).then(()=>navigate('/'))
    .catch(error =>{
      console.log(error)
    })
    
    // navigate('/')
  }

  return(
    <section className="conteiner">
      <form className="form"
       onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign in</h1>
        
        <div className="fields" >
          <label>
            Email
            <input type='text' placeholder="...Email" {...register('email')}/>
            <p className='error-msg' >{errors.email?.message}</p>
          </label>

          <label>
            Password
            <input type='password' placeholder="...Password" {...register('password')} />
            <p className='error-msg' >{errors.password?.message}</p>
          </label>

          <input type='submit' className="btn-styled" value='Login' />
        </div>
      </form>
    </section>
  )
}