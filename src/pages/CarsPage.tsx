import React, {useEffect} from 'react';

const CarsPage = () => {
    useEffect(() => {
        carService.getCar()
    }, []);
    return (
        <div>
            CarsPage
        </div>
    );
};

export default CarsPage;