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
                    <p key={posts.id}>
                        Title: {posts.title} <br/>
                        Description: {posts.body} <br/>
                        Reactions: {posts.reactions} <br/>
                        Tag: {posts.tags.toString()}
                        <hr/>
                    </p>
                ))
            }
        </div>
    );
};

export default PostsComponent;