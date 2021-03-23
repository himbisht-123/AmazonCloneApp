import React from 'react';
// import { useHistory } from 'react-router';
import StripeCheckout from 'react-stripe-checkout';
import {useHistory} from 'react-router-dom';
// import { useStateValue } from './StateProvider';


const StripeCheckoutButton=({price})=>{
//    const [{basket},dispatch]=useStateValue();
      const history=useHistory(); 
    const priceForStripe=price*100;
   const PublishableKey='pk_test_51IBCs2DMoSEQ9RXTMXyN7abxXnm5PKTIzOG9Zv74w25NHtYzJsR2iuKE2LXYthriGcYVWDQX13Nw9T1fGVlxB5JY00kvq0a8nU';
   const ontoken=token=>{
      alert('Payment successful');
      history.push("/"); 
   }
    return (
       <StripeCheckout
       label='Pay now'
       name='AmazonClone.ltd'
       billingAddress
       shippingAddress
       description={`Your total is ${price}`}
       amount={priceForStripe}
       panelLabel='Pay now'
       token={ontoken}
       stripeKey={PublishableKey}
       ></StripeCheckout>         
    )
}
export default StripeCheckoutButton;