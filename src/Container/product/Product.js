import React from 'react';
import './product.css'
const Product = (props) => {
    const {name,img,price,seller,stock} =props.data
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="detelce">
            <h2>{name}</h2>
            <p>By: {seller}</p>
            <p>Price ${price}</p>
            <p>stock in {stock}</p>
            <button onClick={()=>props.hadelar(props.data)}>🛒 Add to chart</button>
            </div>
        </div>
    );
};

export default Product;