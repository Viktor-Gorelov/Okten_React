import {ICarWithAuth} from "../models/ICarWithAuth";
import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren{
    car: ICarWithAuth;
}
const Car:FC<IProps> = ({car}) => {
    const {id,brand, price, year, photo } = car;
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {car.brand}</div>
            <div>year: {car.year}</div>
            <img src={car.photo} alt={car.brand}/>
            <div>price: {car.price}</div>
            <hr/>
        </div>
    );
};

export {Car};
