export const Register = () =>{
  
  return(
    <section className="conteiner">
      <form className="form" onSubmit={(e)=> e.preventDefault()}>
        <h1>Welcome</h1>
        
        <div className="fields" >
        
        <label>
            Username
            <input type='text' placeholder="...Username"/>
          </label>
        
          <label>
            Email
            <input type='text' placeholder="...Email"/>
          </label>

          <label>
            Password
            <input type='text' placeholder="...Password"/>
          </label>

          <label>
            Verify password
            <input type='text' placeholder="...Verify password"/>
          </label>

          <input type='submit' className="submit-btn" value='Login' />
        </div>
      </form>
    </section>
  )
}