import React,{useState} from 'react';
import axios from 'axios';
function PostCreate ( props ) {
    const [title,setTitle] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(title)
        await axios.post('http://localhost:4000/posts',{title});
        setTitle('');
        alert('Post Created');
    }
    return (

        <form className={'form-container'} onSubmit={handleSubmit}>
            <div className={'form-group'}>
                <label className={'form-title'}>Create a Post</label>
            <input type="text" name="title" placeholder="Title"
                   className={'form-control'}
                     value={title}
                    onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <button type='submit' className={'btn btn-primary'}>Publish</button>
        </form>
    );
}

export default PostCreate;