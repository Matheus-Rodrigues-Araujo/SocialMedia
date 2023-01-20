import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react';

export const Register = () =>{
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  })
  const navigate = useNavigate()

  
  function updateForm(value){
    return setForm((prev)=>{
      return {...prev,...value}
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    const newPerson = {...form}

    await fetch("http://localhost:4000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({username: "", email: "", password: ""})
    navigate('/login')
  }

  return(
    <section className="conteiner">
      <form className="form" onSubmit={onSubmit} >
        <h1>Welcome</h1>
        
        <div className="fields" >
        
        <label>
            Username
            <input 
            type='text'
            id="username"
            value={form.username}
            placeholder="...Username"
            onChange={(e)=> updateForm({username: e.target.value})} 
            />
          </label>
        
          <label>
            Email
            <input 
            type='text' 
            placeholder="...Email" 
            id="email"
            value={form.email} 
            onChange={(e)=> updateForm({email: e.target.value})} 
            />
          </label>

          <label>
            Password
            <input 
            type='password'
            placeholder="...Password"
            id="password"
            value={form.password} 
            onChange={(e)=> updateForm({password: e.target.value})} 
            />
          </label>

          {/* <label>
            Verify password
            <input 
            type='password'
            id="verify-password" 
            placeholder="...Verify password"
            />
          </label> */}

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