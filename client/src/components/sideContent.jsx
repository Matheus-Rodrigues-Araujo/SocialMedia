export const SideContent = () =>{
    return(
        <div className="side-content" >
            <div className="search" >
                <input type="text" placeholder="Search..." />
                <button>OK</button>
            </div>
            <div className="copyright">
                <a href="">Terms</a>
                <a href="">Privacy policy</a>
                <a href="">Cookies policy</a>
                <a href="">Accessibility</a>
                <p>&copy;TalkNow,Inc.</p>
                <a href="">Ads</a>

            </div>
        </div>
    )
}