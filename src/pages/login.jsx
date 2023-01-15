import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import * as yup  from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector} from 'react-redux';

const schema = yup.object({
  email: yup.string().required('Email is required!'),
  password: yup.string().required('Password is required!')
}).required()

export const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const usersList = useSelector(state => state.user.value)

  const { register,handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(schema)})

  const findUser = (data)=>{
    const currentUser = usersList.map(user => {
      return user
    })
  }

  const onLogin = ()=> {
    
    console.log(usersList)

    // dispatch(login(currentUser.id))
  }

  const onSubmit = () =>{
    onLogin()
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

          <input type='submit' className="submit-btn" value='Login' />
        </div>
      </form>
    </section>
  )
}