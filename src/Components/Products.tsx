import React, {FC, useEffect, useState} from 'react';
import product, {IProductProps, IProductTypeProps} from "./Product";
import Product from "./Product";

const Products: FC = () => {
    const [products, setProducts] = useState<IProductProps[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({products}) => {
                setProducts(products);
            });
    },[])
    return (
        <div>
            {
                products
                    .map(({id,title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images}: IProductProps) => (<Product key={id} id={id} title={title} description={description} price={price} discountPercentage={discountPercentage} rating={rating} stock={stock} brand={brand} category={category} thumbnail={thumbnail} images={images}/>))
            }
        </div>
    );
};

export default Products;