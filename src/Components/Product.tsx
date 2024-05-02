import React, {FC} from 'react';

export interface IProductProps{
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}
export type IProductTypeProps = IProductProps &{children?: React.ReactNode};
const Product: FC<IProductTypeProps> = ({id,title,description,price,
                                            discountPercentage,rating, stock, brand,
                                     category, thumbnail, images}) => {
    return (
        <div>
            <h2> №{id}. Title: {title}. </h2>
            <p>Description: {description}.</p>
            <h2>Price: {price}. DiscountPercentage: {discountPercentage}. Rating: {rating}. </h2>
            <h2>Stock: {stock}. Brand: {brand}. Category: {category}.</h2>
            <img src={thumbnail} alt={title}></img>
            {images.map(function (images){
                return (
                    <img src={images} alt={title}/>
                )
            })}
        </div>
    );
};

export default Product;
