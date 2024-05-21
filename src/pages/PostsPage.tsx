import React from "react";
import {Posts} from "../components/PostsContainer/Posts";
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;