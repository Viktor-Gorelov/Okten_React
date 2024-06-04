import React, {useContext} from 'react';
import {Context, useContextProvider} from "../context/ContextProvider";
import PostsComponent from "../components/PostsComponent";

const PostsPage = () => {
    return (
        <div>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;