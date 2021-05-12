import React from 'react';
import products from '../data/Data';
import './Product.css'

const Product =({addCart}) => {
    //console.log(products)
    return(
      <div className="products_list">
          {         
                      products.map((product, index) => (
                           <div className='one_product' key={index}>
                              <h5>{product.name}</h5>
                              <img src={product.imageUrl} alt="product photo" />
                              <p className="product_description">{product.description}</p>
                              <p>Price $ {product.price}</p>
                              <button onClick={()=> addCart(product)}>Buy</button>
                           </div>
                      ))
                  }
          
      </div>
    )
  }
  
  export default Product