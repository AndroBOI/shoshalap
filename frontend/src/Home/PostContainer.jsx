import React, { useState, useContext } from "react";
import postContainerStyle from "../Home/PostContainer.module.scss";
import { PostContext } from "../Context/PostContext";
import like from '../assets/images/like.png';
import dislike from '../assets/images/dont-like.png';
import deleteIcon from '../assets/images/delete (1).png';
import commentIcon from '../assets/images/comment.png';
import editIcon from '../assets/images/edit.png';

const PostContainer = ({ content, id }) => {
    const { deletePost } = useContext(PostContext);
    const [likes, setLikes] = useState(0);
    const [disLikes, setDisLikes] = useState(0);
    const [liked, setLiked] = useState(false); 
    const [disliked, setDisliked] = useState(false); 

    const handleLike = () => {
        if (liked) {
            setLikes(prev => prev - 1);
            setLiked(false);
        } else {
            setLikes(prev => prev + 1);
            setLiked(true);
            if (disliked) {
                setDisLikes(prev => prev - 1);
                setDisliked(false);
            }
        }
    };
    
    const handleDisLike = () => {
        if (disliked) {
            setDisLikes(prev => prev - 1);
            setDisliked(false);
        } else {
            setDisLikes(prev => prev + 1);
            setDisliked(true);
            if (liked) {
                setLikes(prev => prev - 1);
                setLiked(false);
            }
        }
    };
    const handleDelete = () => {
        deletePost(id);
    };

    return (
        <div className={postContainerStyle.postContainer}>
            <div className={postContainerStyle.mainPost}>
                <div className={postContainerStyle.head}>
                    <div className={postContainerStyle.demoProfilePic}></div>
                    <div className={postContainerStyle.name}>John Doe</div>
                </div>
                <div className={postContainerStyle.postContent}>
                    <h4>{content}</h4>
                </div>
            </div>
            <div className={postContainerStyle.interactions}>
                <div className={postContainerStyle.likes}>{likes} Likes</div>
                <div className={postContainerStyle.dislikes}>{disLikes} Dislikes</div>
            </div>
            <div className={postContainerStyle.modifiers}>
                <div className={postContainerStyle.buttons}>
                    <button
                        onClick={handleLike}
                        className={`${postContainerStyle.like} ${liked ? postContainerStyle.liked : ""}`} 
                    >
                        <img src={like} alt="" />
                    </button>
                    <button
                        onClick={handleDisLike}
                        className={`${postContainerStyle.dislike} ${disliked ? postContainerStyle.disliked : ""}`} 
                    >
                        <img src={dislike} alt="" />
                    </button>
                    <button
                        onClick={handleDelete}
                        className={postContainerStyle.delete}
                    >
                        <img src={deleteIcon} alt="" />
                    </button>
                </div>
                <input className={postContainerStyle.comment} type="text" />
                <button className={postContainerStyle.commentReply}><img src={commentIcon} alt="" /></button>
                <button className={postContainerStyle.edit}><img src={editIcon} alt="" /></button>
            </div>
        </div>
    );
};

export default PostContainer
