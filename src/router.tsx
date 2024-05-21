import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import React from "react";
import PostsOfUserPage from "./pages/PostsOfUserPage";
import CommentsOfPostPage from "./pages/CommentsOfPostPage";

const router = createBrowserRouter([
    {
        path: '', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'users'}/>},
            {path:'users', element:<UsersPage/>,
                children:[
                    {path:':id', element:<PostsOfUserPage/>},
                ]
            },
            {path:'posts', element:<PostsPage/>,
                children:[
                {path:':id', element:<CommentsOfPostPage/>}
                ]
            },
            {path:'comments', element:<CommentsPage/>}
        ]
    }
]);

export {
    router
}