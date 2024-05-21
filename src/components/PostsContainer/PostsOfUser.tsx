import React, {FC} from 'react';
import {IPost} from "../../interfaces/postInterface";
import PostOfUser from "./PostOfUser";

interface IProps{
    posts:IPost[]
}
const PostsOfUser:FC<IProps> = ({posts}) => {


    return (
        <div>
            {
                posts.map(post => <PostOfUser key ={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsOfUser;