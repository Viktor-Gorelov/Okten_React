import React, {useEffect, useMemo, useState} from 'react';
import {useContextProvider} from "../context/ContextProvider";
import {PostWithCommentsType} from "../models/PostWithCommentsType";

const PostCommentsComponent = () => {
    const{postStore:{allPosts}, commentStore:{allComments}} = useContextProvider();
    const [postsWithCommentsState, setPostsWithCommentsState] = useState<PostWithCommentsType[]>([]);

    const postWithCommentsArray = useMemo(() =>{
        return () =>{
            return allPosts.map(post =>{
                return{...post,comments: allComments.filter(comment => comment.postId === post.id)};
            });
        }
    },[allComments,allPosts]);

    useEffect(() => {
        setPostsWithCommentsState(postWithCommentsArray);
    }, [postWithCommentsArray]);


    return (
        <div>
            {
                postsWithCommentsState.map(post => <div key={post.id}>
                    <div>{post.title}</div>
                <ul>
                    {
                        post.comments.map(comment =><li key={comment.id}>{comment.name}</li>)
                    }
                </ul>
                </div>)
            }
        </div>
    );
};

export default PostCommentsComponent;