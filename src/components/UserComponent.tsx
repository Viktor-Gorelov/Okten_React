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
            <h2>№ {user.id}</h2>
            <p> First-Name: {user.firstName},  Last-Name: {user.lastName},  Maiden-Name: {user.maidenName}</p>
            <img src={user.image} alt={user.firstName}></img>
            <p>Birth-Date: {user.birthDate}, Age: {user.age}, Gender: {user.gender}, Blood-Group: {user.bloodGroup}</p>
            <p>Email: {user.email}, UserName: {user.username}, Password: {user.password}, Phone: {user.phone}</p>
            <p>Height: {user.height}, Weight: {user.weight}, EyeColor: {user.eyeColor}, Hair-Color: {user.hair.color},
                Hair-Type: {user.hair.type}</p>
            <p>Domain: {user.domain}, Ip: {user.ip}, Mac-Address: {user.macAddress}, University: {user.university}</p>
            <p>Address: {user.address.address}, City: {user.address.city},
                Coordinates-Latitude: {user.address.coordinates.lat},
                Coordinates-Longitude: {user.address.coordinates.lng}</p>
            <p>Postal-Code: {user.address.postalCode}, State: {user.address.state}</p>
            <p>CardExpire: {user.bank.cardExpire}, CardNumber: {user.bank.cardNumber}, CardType: {user.bank.cardType},
             Currency: {user.bank.currency}, IBAN: {user.bank.iban}</p>
            <p>Company<br></br>
                Name: {user.company.name}, Title: {user.company.title}, Department: {user.company.department},
                Address: {user.company.address.address}, City: {user.company.address.city},</p>
                <p>Coordinates-Latitude: {user.company.address.coordinates.lat},
                Coordinates-Longitude: {user.company.address.coordinates.lng},
                Postal-Code: {user.company.address.postalCode}, State: {user.company.address.state}</p>
            <p>EIN: {user.ein}, SSN: {user.ssn},<br></br>
                User-Agent: {user.userAgent.toString()}</p>
            <div>
                <button onClick={onClickHandler}>Show post</button>
            </div>
            <hr/>
        </div>
    );
};

export default UserComponent;