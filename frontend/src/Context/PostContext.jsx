import { createContext, useState } from "react";

export const PostContext = createContext(); // Create context

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]); // Store multiple posts

    const addPost = (newPost) => {
        setPosts([...posts, newPost]); // Add new post
    };

    return (
        <PostContext.Provider value={{ posts, addPost }}>
            {children}
        </PostContext.Provider>
    );
};
