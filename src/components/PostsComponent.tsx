import React from 'react';
import {useAppSelector} from "../redux/slices/store";
import PostComponent from "./PostComponent";

const PostsComponent = () => {
    const {posts, isLoaded} = useAppSelector(state => state.postSlice)
    return (
        <div>
            {
                isLoaded? posts.map(post =><PostComponent key={post.id} post ={post}/>)
                    :
                    <h3>loading ...</h3>
            }
        </div>
    );
};

export default PostsComponent;