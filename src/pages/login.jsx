import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup  from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch} from 'react-redux';
import Axios from 'axios';
import { validateUser } from '../features/user/userSlice';

const schema = yup.object({
  email: yup.string().required('Email is required!'),
  password: yup.string().required('Password is required!')
}).required()

export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const auth = useSelector(state => state.users.auth)

  const { register,handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(schema)})

  const onSubmit = async (values) =>{
    const {email, password} = values
    const url = "http://localhost:4000/api/login"
    const data = {email: email,password: password}
    const config = {'content-type': 'application/json'}
    
    const response = await Axios.post(url, data, config)
    console.log(response.data)
    navigate('/')
  }

  return(
    <section className="conteiner">
      <form className="form"
       onSubmit={handleSubmit(onSubmit)}>
        <h1>Welcome</h1>
        
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