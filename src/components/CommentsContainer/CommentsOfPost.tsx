import React, {FC} from 'react';
import {IComment} from "../../interfaces/commentInterface";
import CommentOfUser from "./CommentOfUser";

interface IProps{
    comments:IComment[]
}
const CommentsOfUser:FC<IProps> = ({comments}) => {


    return (
        <div>
            {
                comments.map(comment => <CommentOfUser key ={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsOfUser;