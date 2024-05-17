import {FC, PropsWithChildren} from "react";
import {IUser} from "../../interfaces/userInterface";

interface IProps extends PropsWithChildren{
    user: IUser;
}
const User:FC<IProps> = ({user}) => {
    const {id,name, username, email} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {User};