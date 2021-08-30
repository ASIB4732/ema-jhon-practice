import React from 'react';

const Card = (props) => {
    const products=props.card
let total=0;
for (let i = 0; i < products.length; i++) {
    const element = products[i];
    total=total+element.price
    
}
let shipingCost=0;
if(total>5000){
    shipingCost=0
}
else if(total>1000){
    shipingCost=8
}
else if(total>0){
    shipingCost=14.99
}
let tex=total/15
    return (
        <div>
            <h3 className="text-success">Orser Count: {products.length}</h3>
            <p>Shiping Cost:- ${shipingCost}</p>
            <p>Tex/Vet 15% :- ${tex}</p>
            <h4>Total Mony:- ${total+shipingCost}</h4>
            <button>Pament ON</button>
        </div>
    );
};

export default Card;