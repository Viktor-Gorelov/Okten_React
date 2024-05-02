import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
interface IProps{
    user: IUserModel;
}
type IPropsType = IProps & {children?: React.ReactNode} & {lift?:(userId:number) => void}
const UserComponent:FC<IPropsType> = ({user, lift}) => {
    const onClickHandler = () =>{
        if(lift){
            lift(user.id);
        }
    };
    return (
        <div>
            {user.id} {user.firstName} {user.lastName} {user.maidenName}
            <p>{user.birthDate} {user.age} {user.gender}</p>
            <div>
                <button onClick={onClickHandler}>Show post</button>
            </div>
            <hr/>
        </div>
    );
};

export default UserComponent;