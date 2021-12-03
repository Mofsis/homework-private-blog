import React from 'react';
import posts from '../data/posts.json';
import {useParams} from "react-router-dom";

const Blogposts = () => {

    const {blogId} = useParams();

    const selectedPost = posts.find((postId) => {
        return postId.id === blogId;
    })

    return (
        <div>
            <h2>Blogpost</h2>
            <h3>{selectedPost.title}</h3>
            <h5>{selectedPost.date}</h5>
            <p>{selectedPost.content}</p>
        </div>
    );
};

export default Blogposts;