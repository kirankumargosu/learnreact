import React from "react";

function Product(props)
{
    return(
        <div>
            <h2>Name: {props.product.name} </h2>
            <p>{props.product.price.toLocaleString("en-US", {style: "currency", currency: "GBP"})} - {props.product.description}  </p>
            <hr></hr>
        </div>
    );
}

export default Product;
