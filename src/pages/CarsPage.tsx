import React, {useEffect, useState} from 'react';
import {carService} from '../services/api.service'
import {ICarWithAuth} from "../models/ICarWithAuth";
import {Car} from "../components/CarComponent";

const CarsPage = () => {
    const [cars, setCars] = useState<ICarWithAuth[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const checkAuthentication = () => {
            const token = localStorage.getItem('tokenPair');
            setIsAuthenticated(!!token);
        };
        checkAuthentication();
        if (isAuthenticated) {
            carService.getCars().then((value) => {
                if (value && value.items) {
                    setCars(value.items);
                }
            });
        }
    }, [isAuthenticated]);
    return (
        <div>
            {cars.length > 0 ? (
                cars.map((car) => <Car key={car.id} car={car} />)
            ) : (
                <div>User is not Authenticated</div>
            )}
        </div>
    );
};

export default CarsPage;