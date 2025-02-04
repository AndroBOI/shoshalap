import React from "react";
import postContainerStyle from "../Home/PostContainer.module.scss";

const PostContainer = ({ content }) => {
    return (
        <div className={postContainerStyle.postContainer}>
             <div className={postContainerStyle.mainPost}>
            <div className={postContainerStyle.head}>
                <div className={postContainerStyle.demoProfilePic}></div>
                <div className={postContainerStyle.name}>John Doe</div>
            </div>

            {/* Display unique post */}
            <div className={postContainerStyle.postContent}>
                <h4>{content}</h4>
            </div>

            <div className={postContainerStyle.modifiers}>
                <button className={postContainerStyle.buttons}>
                    <button>Like</button>
                    <button>Dislike</button>
                    <button>Delete</button>
                </button>
                <input className={postContainerStyle.comment} type="text" />
                <button className={postContainerStyle.commentReply}>Comment</button>
                <button className={postContainerStyle.edit}>Edit</button>
            </div>
        </div>
        </div>
       
    );
};

export default PostContainer;
