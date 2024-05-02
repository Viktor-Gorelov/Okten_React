import React, {FC, useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import UserComponent from "./UserComponent";
import {getAllUsers} from "../servises/jps.api.services";

type IPropsTypes = {lift?: (userId:number) => void}
const UsersComponent:FC<IPropsTypes> = ({lift}) => {

    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(()=>{
        getAllUsers().then(({data}) => setUsers(data.users))
    },[]);
    return (
        <div>
            {users.map((user: IUserModel) => (<UserComponent key={user.id} lift={lift} user={user}/>))}
        </div>
    );
};

export default UsersComponent;