import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {commentService, postService, userService} from "./services/api.services";
import {Context, defaultValue} from './context/ContextProvider';
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";
import {ICommentModel} from "./models/ICommentModel";

const App = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data));
        postService.getPosts().then(value => setPosts(value.data));
        commentService.getComment().then(value => setComments(value.data))
    }, []);
  return (
    <div>
      <HeaderComponent/>
        <Context.Provider value={{
            userStore:{
                allUsers:users
            },
            postStore:{
                allPosts:posts
            },
            commentStore:{
                allComments:comments
            }
        }}>
      <Outlet/>
            </Context.Provider>
    </div>
  );
}

export default App;
