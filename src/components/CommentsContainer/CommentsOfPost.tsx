import React, {FC} from 'react';
import {IComment} from "../../interfaces/commentInterface";

interface IProps{
    comments:IComment[]
}
const CommentsOfUser:FC<IProps> = ({comments}) => {


    return (
        <div>
            {
                comments.map(post => <CommentsOfUser key ={post.id} comments={comments}/>)
            }
        </div>
    );
};

export default CommentsOfUser;