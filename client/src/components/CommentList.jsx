import React,{useState,useEffect} from 'react';
import axios from 'axios';

function CommentList ( {postId} ) {
    const [comments,setComments] = useState([]);
    const [loading,setLoading] = useState(true);
    const fetchComments = async () => {
        const result = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
        setComments(result.data);
        setLoading(false);
    }
    console.log(comments)
    useEffect(() => {
        fetchComments();
    },[]);

    return (
        <>
            { loading ? <h1>Loading...</h1> :
              <ul className={'comment-list-container'}>
                { comments.map ( comment => (
                    <li key={comment.id} className={'comment-list'}>{comment.content}</li>
                ) ) }
            </ul> }
        </>
    );
}

export default CommentList;