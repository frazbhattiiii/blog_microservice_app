import React         from 'react';
import PostCreate    from "./PostCreate";
import PostList      from "./PostList";

function Home ( props ) {
    return (
        <>
        <PostCreate/>
            <hr/>
            <PostList/>
            <hr/>

        </>
    );
}

export default Home;