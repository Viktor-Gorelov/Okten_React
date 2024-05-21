import {FC, PropsWithChildren} from "react";
import {IPost} from "../../interfaces/postInterface";
import {Link} from "react-router-dom";

interface IProps extends PropsWithChildren{
    post: IPost;
}
const Post:FC<IProps> = ({post}) => {
    const {userId,id,title, body } = post;
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: <Link to={post.id.toString()}> {title}</Link></div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export {Post};