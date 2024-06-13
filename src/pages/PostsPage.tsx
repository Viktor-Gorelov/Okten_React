import React, {useEffect} from 'react';
import {useAppDispatch} from "../redux/slices/store";
import {postActions} from "../redux/slices/postSlice";
import PostsComponent from "../components/PostsComponent";

const PostsPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts())
    }, []);

    return (
        <div>
            <PostsComponent/>
        </div>
    );
};

export default PostsPage;