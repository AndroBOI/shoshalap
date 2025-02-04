import React from 'react';
import styles from '../Components/CreatePost.module.scss';
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../Context/PostContext';


const CreatePost = () => {
    const[text, setText] = useState("");
    const { addPost } = useContext(PostContext);
    const navigate = useNavigate();

    const handlePost = () => {
        if(text.trim()) {
            addPost(text);
            setText("");
            navigate("/Home");
        }
    }

    return (
        <div className={styles.createPostContainer}>
            <div className={styles.createPostContent}>
                <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write something..."></textarea>

                <div className={styles.mediaSending}>
                    <button>Send Image</button>
                    <button>Send Video</button>
                </div>

                <button
                onClick={handlePost}
                className={styles.postButton}>Post</button>
            </div>
        </div>
    );
};

export default CreatePost;
