import React from 'react';
import posts from '../data/posts.json';
import {Link} from "react-router-dom";
import Blogposts from "./Blogposts";

const Blog = () => {
    console.log(posts)
    return (
        <div>
            <h2>Blog overzichtspagina</h2>
            <h3>Aantal blogposts: {posts.length}</h3>
            <ul>
                {posts.map(blogs => {
                    return <li key={blogs.id}>
                        <Link to={`/blogposts/${blogs.id}`}>
                            {blogs.title}
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default Blog;