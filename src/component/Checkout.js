import React from 'react'
import '../styling/Checkout.css';
import { useStateValue } from './StateProvider';
import SubTotal from './SubTotal';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {

     const [{basket,user}]=useStateValue();


    return (
        <div className="checkout">
           <div className="checkout-left">
            <img className="checkout-ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/HSS_ILM_640x45._CB659298199_.jpg" alt=""
            ></img>
            <div>
            <h3>Hello ,{user.email}</h3>
            <h2  className="checkout-title">Your 
            shopping Basket</h2>
              {
                basket.map(item=>(
                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                ))  
              }

            </div>
           </div>
           <div className="checkout-right">
           <SubTotal/>
           </div> 
        </div>
    )
}

export default Checkout 