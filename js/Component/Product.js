import React from 'react';


function ProductMOseOver(myOneProduct){
   console.log("Price is " + myOneProduct.price );
}


function Product(props){
    return (
        <div>
            <h2 onClick={ProductMOseOver(props.myProduct)} >{props.myProduct.name}</h2>
            <p>${props.myProduct.price}</p>
            <input type="checkbox" checked={props.myProduct.available} onChange={()=>props.handleChange2(props.myProduct.id) }/>
            <p>Available: {props.myProduct.available.toString()} </p>
        </div>
    )
}

/*
    <p>{props.Product.price.toLocalString("en-us", {style: "currency", currency:"AUD"})}</p>
*/

export default Product