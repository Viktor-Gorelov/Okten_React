import {FC, PropsWithChildren} from "react";
import {IUser} from "../../interfaces/userInterface";
import {Link} from "react-router-dom";

interface IProps extends PropsWithChildren{
    user: IUser;
}
const User:FC<IProps> = ({user}) => {
    const {id,name, username, email, address,phone,
        website, company } = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: <Link to={user.id.toString()}> {name}</Link></div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>street: {address.street}</div>
            <div>suite: {address.suite}</div>
            <div>city: {address.city}</div>
            <div>zipcode: {address.zipcode}</div>
            <div>geo lat: {address.geo.lat}</div>
            <div>geo.lng: {address.geo.lng}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>company-name: {company.name}</div>
            <div>company-Catch Phrase: {company.catchPhrase}</div>
            <div>company-bs: {company.bs}</div>
            <hr/>
        </div>
    );
};

export {User};