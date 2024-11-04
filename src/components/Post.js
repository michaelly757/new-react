// src/components/Post.js
import React from 'react';

const Post = ({ title, content }) => {
    return (
        <li>
            <h4>{title}</h4>
            <p>{content}</p>
        </li>
    );
};

export default Post;
