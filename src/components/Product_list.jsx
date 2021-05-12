import React, {useState} from 'react';
import Product from './Product';

function Product_list(){
    const [item, setItem]=useState([]);

    const addCart = (product) =>{
        let newCart=[...item, {product}];
        setItem(newCart);
        console.log(newCart)
    }
    return (
        <div>
            <Product addCart={addCart}/>
        </div>
    );
}

export default Product_list;