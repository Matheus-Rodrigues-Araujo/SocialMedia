const Comment = () =>{{
    return (
        <div className="comment">
            <input type="text" className="comment-text" onChange={e=>setCommentText(e.target.value)} />
            <input type="submit" value="Publish" className="publish-btn" onClick={()=>console.log(commentText)} />
         </div>
    )
}}