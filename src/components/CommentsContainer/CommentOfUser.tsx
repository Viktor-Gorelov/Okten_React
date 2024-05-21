import React, {FC} from 'react';
import {IComment} from "../../interfaces/commentInterface";

interface IProps {
    comment: IComment
}
const CommentOfUser:FC<IProps> = ({comment}) => {
    return (
        <div>
            {
                <div>
                    <h2>Comment {comment.id}</h2>
                    <div>postId: {comment.postId}</div>
                    <div>id: {comment.id}</div>
                    <div>email: {comment.email}</div>
                    <div>name: {comment.name}</div>
                    <div>body: {comment.body}</div>
                    <hr/>
                </div>
            }
        </div>
    );
};

export default CommentOfUser;