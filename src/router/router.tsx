import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import React from "react";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UserPage from "../pages/UserPage";

const routes: RouteObject[] = [
    {path:'',element:<App/>, children:[
            {path:'users', element:<UsersPage/>},
            {path:'posts', element:<PostsPage/>},
            {path:'users/:id', element:<UserPage/>},
        ]}
]
export const router = createBrowserRouter(routes);