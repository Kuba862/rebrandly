import React from 'react';
import { useLocation } from 'react-router-dom';

const Post = () => {

    const { state } = useLocation();
    
    return (
        <div>
            <h3>{state.title}</h3>
            <p>{state.content}</p>
        </div>
    );
}

export default Post;
