import React,{useState,useEffect} from 'react';
import axios                      from 'axios';
import CommentCreate              from "./CommentCreate";
import CommentList                from "./CommentList";

function PostList ( props ) {
    const [posts,setPosts] = useState({});
    const [loading,setLoading] = useState(false);

    const fetchPosts = async() => {
        setLoading(true);
        const res = await axios.get('http://localhost:4002/posts');
        setPosts(res.data);
        setLoading(false);
    }
    useEffect ( () => {
        fetchPosts();
    } , [  ] );
    console.log(posts);
    return (
        <>
        <h1 className={'title'}>Post List</h1>
            <div className={'card-container'}>
                {loading ? <h1>Loading...</h1> :
                    Object.values(posts).map(post => (
                        <div className={'comment-card'} key={post.id}>
                            <h3>{post.title}</h3>
                            <CommentList comments={post.comments}/>
                            <CommentCreate postId={post.id}/>
                        </div>
                    )) }
            </div>
        </>
    );
}

export default PostList;