import React from 'react';

function PostCreate ( props ) {
    return (
        <div>
        <form className={'form-container'}>
            <div className={'form-group'}>
                <label className={'form-title'}>Create a Post</label>
            <input type="text" name="title" placeholder="Title" className={'form-control'} />
            </div>
            <button className={'btn btn-primary'}>Publish</button>
        </form>
        </div>
    );
}

export default PostCreate;