import React, {useEffect, useState} from 'react';
import PostsOfUser from "../components/PostsContainer/PostsOfUser";
import {useParams} from "react-router-dom";
import {IPost} from "../interfaces/postInterface";
import {userService} from "../services/userService";

const PostsOfUserPage = () => {

    const {id} = useParams();

    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        if(id){
        userService.getPostsOfUser(id)
            .then(value => setPosts(value.data))
        }
    }, [id]);
    return (
        <div>
            <PostsOfUser posts={posts}/>
        </div>
    );
};

export default PostsOfUserPage;