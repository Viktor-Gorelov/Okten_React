import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux/slices/store";
import {postActions} from "../redux/slices/postSlice";

const PostPage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {post} = useAppSelector(state => state.postSlice)
    useEffect(() => {
        dispatch(postActions.loadPostsById(id))
    }, [id]);
    return (
        <div>
            {
                post && post.body
            }
        </div>
    );
};

export default PostPage;