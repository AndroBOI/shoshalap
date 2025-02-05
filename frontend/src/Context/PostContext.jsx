import { createContext, useState } from "react";

export const PostContext = createContext(); // Create context

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]); 

    const addPost = (newPost) => {
        setPosts([...posts, newPost]); 
    };

    const deletePost = (id) => {
        setPosts(prev => prev.filter((__, i) => i !== id))
    }

    return (
        <PostContext.Provider value={{ posts, addPost, deletePost }}>
            {children}
        </PostContext.Provider>
    );
};
