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
                    <h2>Post {post.id}</h2>
                <div>postId: {post.userId}</div>
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