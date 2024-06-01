import React, {useEffect, useState} from 'react';
import {carService} from '../services/api.service'
import {ICarWithAuth} from "../models/ICarWithAuth";
import {Car} from "../components/CarComponent";
import {IPaginatedPageModel} from "../models/IPaginatedPageModel";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import PaginationComponent from "../components/PaginationComponent";
import {useSearchParams} from "react-router-dom";

const CarsPage = () => {

    const [query,setQuery] = useSearchParams({page:'1'});
    const [carsPaginatedObject, setCarsPaginatedObject] = useState<ICarPaginatedModel>({
        items:[],
        next:null,
        prev:null,
        total_items:0,
        total_pages:0
    })
    const [cars, setCars] = useState<ICarWithAuth[]>([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = () => {
            const token = localStorage.getItem('tokenPair');
            setIsAuthenticated(!!token);
        };
        checkAuthentication();
        if (isAuthenticated) {
            carService.getCars(query.get('page') || '1').then((value) => {
                if (value && value.items) {
                    setCarsPaginatedObject(value);
                    setCars(value.items);
                }
            });
        }
    }, [isAuthenticated, query]);

    const changePage = (action:string)=>{
        switch (action){
            case 'prev':
                setQuery({...carsPaginatedObject.prev});
                break;
            case 'next':
                setQuery({...carsPaginatedObject.next});
                break;
        }
    }
    return (
        <div>
            {cars.length > 0 ? (
                cars.map((car) => <Car key={car.id} car={car}/>)
            ) : (
                <div>User is not Authenticated</div>
            )}
            <div><PaginationComponent changePage={changePage} prev={carsPaginatedObject.prev}
                                      next={carsPaginatedObject.next}/></div>
        </div>
    );
};

export default CarsPage;