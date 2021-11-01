import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import ProductsData from "./data/ProductsData";

function AppProduct()
{
    const productComponents = ProductsData.map(item => <Product key = {item.id} product={item}/>)

    return (
        <div>
            <Header />
            {productComponents}
        </div>
    );
}

export default AppProduct