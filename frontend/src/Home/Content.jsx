import React from 'react';
import contentStyle from '../Home/Content.module.scss';
import PostContainer from './PostContainer';
import { PostContext } from '../Context/PostContext';
import { useContext } from 'react';

const Content = () => {
    const {posts} = useContext(PostContext);
return (
    <div className={contentStyle.contentWrapper}>
        <div className={contentStyle.wrapper}>
            {
                posts.lenght === 0 ? (
                    <p>No posts yet.</p>
                ) : (
                    posts.map((post, index) => <PostContainer key={index} content={post}/>)
                )
            }
        </div>
    </div>
);
};

export default Content;