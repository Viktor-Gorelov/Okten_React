import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IComment} from "../interfaces/commentInterface";
import {postService} from "../services/postService";
import CommentsOfUser from "../components/CommentsContainer/CommentsOfPost";

const PostsOfUserPage = () => {

    const {id} = useParams();

    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        if(id){
            postService.getCommentsOfPost(id)
                .then(value => setComments(value.data))
        }
    }, [id]);
    return (
        <div>
            <CommentsOfUser comments={comments}/>
        </div>
    );
};

export default PostsOfUserPage;