import React, {useEffect} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import {useStore} from "./context/ContextProvider";
import {commentService, postService, userService} from "./services/api.services";
const App = () => {

    const {userStore,userStore:{favoriteUser},
    postStore,commentStore} =useStore();

    useEffect(() => {
        userService.getUsers().then(value => userStore.loadUsers(value.data));
        postService.getPosts().then(value => postStore.loadPosts(value.data));
        commentService.getComment().then(value => commentStore.loadComments(value.data))

    }, []);

  return (
    <div>
      <HeaderComponent/>
            <Outlet/>

        <hr/>
            {favoriteUser && <div>{favoriteUser.email}</div>}
        <hr/>
    </div>
  );
}

export default App;
