// import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export const Post = ()=>{
    const auth = useSelector((state)=> state.user.auth)
    
    const style ={
        color: 'red',
        fontSize: '3rem',
        fontWeight: '700',
        textAlign: 'center'
    }
    
    if(!auth){
        return(
            <div style={style}>
                <h1>Not authorized</h1>
                <p>Must login to access!</p>
            </div>
        )
    }

    return (
        <form className="main-content post">
           
            <h3>Your post</h3>
            <textarea cols="30" rows="10" placeholder="...Comment something here" ></textarea>

            <input type="submit" value='Publish' className="btn-styled" />
        </form>
    )
}