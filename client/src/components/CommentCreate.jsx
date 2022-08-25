import React,{useState} from 'react';
import axios from 'axios';
function CommentCreate ( {postId} ) {
    const [content,setContent] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(content)
        await axios.post(`http://localhost:4001/posts/${postId}/comments`,{content});
        setContent('');
    }
    return (
        <>
        <form className={'form-container'} onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="comment">Comment on Post</label>
                <input className="form-control"
                       placeholder={'Enter Comment'}
                          value={content}
                       onChange={(e)=>setContent(e.target.value)}
                       id="comment" rows="2"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </>
    );
}

export default CommentCreate;