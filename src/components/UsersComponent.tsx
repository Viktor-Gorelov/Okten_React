import React from 'react';
import {useAppSelector} from "../redux/slices/store";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
    const {users,isLoaded} = useAppSelector(state => state.userSlice)
    return (
        <div>
            {
                isLoaded? users.map(user =><UserComponent key={user.id} user ={user}/>)
                    :
                    <h3>loading ...</h3>
            }
        </div>
    );
};

export default UsersComponent;