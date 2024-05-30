import React, {useEffect, useState} from 'react';
import {carService} from '../services/api.service'
import {ICarWithAuth} from "../models/ICarWithAuth";
import {Car} from "../components/CarComponent";

const CarsPage = () => {
    const [cars, setCars] = useState<ICarWithAuth[]>([])
    useEffect(() => {
        // @ts-ignore
        carService.getCars().then((value) => setCars(value?.items))
    }, []);
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default CarsPage;