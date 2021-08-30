import React, { useState } from 'react';
import "./Shop.css"
import fakeData from "../../fakeData"
import Product from '../product/Product';
import Card from '../card/Card';
const Shop = () => {
    const first10=fakeData.slice(0,3)
    let [card, setCard]=useState([])
    const hadelar =(pro)=>{
        let newCard=[...card,pro]
        setCard(newCard)
    }
    return (
        <div className="shop">
            <div className="productClass">
            {
                first10.map(data=><Product 
                    hadelar={hadelar}
                    data={data}
                    ></Product>)
            }
            </div>
            <div className="shopClass">
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Shop;