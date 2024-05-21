import React, {FC} from 'react';
import {IPost} from "../../interfaces/postInterface";

interface IProps {
    post: IPost
}
const PostOfUser:FC<IProps> = ({post}) => {
    return (
        <div>
            {
                <div>
                <div>userId: {post.userId}</div>
                <div>id: {post.id}</div>
                <div>title: {post.title}</div>
                <div>body: {post.body}</div>
                <hr/>
            </div>
            }
        </div>
    );
};

export default PostOfUser;