import React, {FC} from 'react';
import {IPaginatedPageModel} from "../models/IPaginatedPageModel";
import {SetURLSearchParams} from "react-router-dom";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";

interface IProps{
    setQuery:SetURLSearchParams;
    carsPaginatedObject: ICarPaginatedModel;
    next: IPaginatedPageModel | null;
    prev: IPaginatedPageModel | null;
}
const PaginationComponent:FC<IProps> = ({carsPaginatedObject, setQuery,prev,next}) => {

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
            <button onClick={() =>{
                changePage('prev');
            }}
                    disabled={!prev}
            >prev</button>
            <button onClick={() =>{
                changePage('next');
            }}
                    disabled={!next}
            >next</button>
        </div>
    );
};

export default PaginationComponent;