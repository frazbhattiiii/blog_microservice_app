import React from 'react';

function CommentList ( {comments} ) {
    return (
        <>
            {
              <ul className={'comment-list-container'}>
                { comments.map ( comment => (
                    <li key={comment.id} className={'comment-list'}>{comment.content}</li>
                ) ) }
            </ul> }
        </>
    );
}

export default CommentList;