import React, {FC} from 'react';
import {IPostModel} from "../models/IPostModel";
interface IProps{
    posts:IPostModel[];
}
const PostsComponent:FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map((posts:IPostModel) => (
                    <li key={posts.id}>{posts.body} <br/></li>
                ))
            }
        </div>
    );
};

export default PostsComponent;