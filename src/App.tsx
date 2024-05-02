import React, {useState} from 'react';
import './App.css';
import UsersComponent from "./components/UsersComponent";
import PostsComponent from "./components/PostsComponent";
import {getAllPostsOfSingleUser} from "./servises/jps.api.services";
import {IPostModel} from "./models/IPostModel";
import {IPostsModel} from "./models/IPostsModel";


function App() {
    const [posts, setPosts] = useState<IPostModel[]>([])
    const lift = (userId:number) =>{
        getAllPostsOfSingleUser(userId).then(({data}) => {
            setPosts(data.posts)
        })
    }
  return (
    <div className={'App'}>
        <div className={'users'}><UsersComponent lift={lift}/></div>
        <div className={'posts'}><PostsComponent posts={posts}/></div>
    </div>
  );
}

export default App;
