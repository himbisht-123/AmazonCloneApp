import React from 'react'
import '../styling/Product.css';
import {useStateValue} from './StateProvider';
const Product=({title,image,price,rating,id})=>{

    const [{basket},dispatch]=useStateValue(); 
    console.log(basket);
const addToBasket=()=>{
   dispatch({
       type:'ADD_TO_BASKET',
       item:{
           id:id,
           title:title,
           image:image,
           price:price,
           rating:rating,
       }
   })
}

    return (
        <div className="product">
            <div className="product-info">
             <p>{title}</p>
             <p className="product-price">
             
               <small>$</small>
               <strong>{price}</strong>
             </p>
             <div className="product-rating">
             {Array(rating).fill().map((_,i)=>(
                <p>⭐</p>
             ))}
             
             </div>

            </div>
            <img src={image} alt=""></img>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
