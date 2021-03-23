import React from 'react'
import '../styling/Payment.css';
import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from './StateProvider';
import {Link} from 'react-router-dom';
import StripeCheckoutButton from './Stripe-button';
import { getBasketTotal } from '../reducer';
// import {getBasketTotal} from '../reducer';
// import CurrencyFormat from 'react-currency-format';
// import axios from '../axios';
// import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
function Payment() {
    const [{basket,user}]=useStateValue();
   //  const history=useHistory();
   //  const stripe=useStripe();
   //  const elements=useElements();
   //  const [error,setError]=useState(null);
   //  const [succeeded,setSucceeded]=useState(false);
   //  const [processing,setProcessing]=useState("");
   //  const [disabled,setDisabled]=useState(true);
   //  const [clientSecret,setClientSecret]=useState(true);

   //  useEffect(()=>{
   //    const getClientSecret=async()=>{
   //       const response=await axios({
   //          method:'post',
   //          url:`/payment/create?total=${getBasketTotal(basket)*100}`   
   //       });
   //       setClientSecret(response.data.clientSecret);
   //    }

   //    getClientSecret();
   //  },[basket])
    
   //  console.log('THE SECRET IS >>>',clientSecret);
   //  const handleSubmit=async (event)=>{
   //      event.preventDefault();
   //      setProcessing(true);
      
   //      const payload=await stripe.confirmCardPayment(clientSecret,{
   //         payment_method:{
   //            card:elements.getElement(CardElement)
   //         }
   //      }).then(({paymentIntent})=>{
   //         //paymentIntent=payment confirmation//

   //         setSucceeded(true);
   //         setError(null);
   //         setProcessing(false);
   //         history.replace("/orders")
   //      })
   //  }

   //  const handleChange=event=>{
   //        setDisabled(event.empty);
   //        setError(event.error?event.error.message:"");
   //  }
    return (
        <div className="payment">
           <div className="payment-container">
             <h1>
              Checkout (
                  <Link to="/checkout">{basket?.length} items</Link>
              )
             </h1>
             <div className="payment-section">
                <div className="payment-title">
                   <h3>Delivery Address</h3>
                </div>
                <div className="payment-address">
                   <p>{user?.email}</p>
                   <p>123 React Lane</p>
                   <p>Los Angeles ,CA</p>
                </div>
             </div>

  
             <div className="payment-section">
                 <div className="payment-title">
                    <h3>Review items and delivery</h3>

                 </div>
                 <div className="payment-items">
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                 </div>
             </div>

             <div className="payment-section">
              <div className="payment-title">
                <h3>Payment Method</h3>
              </div>
              <div className="payment-details">
                 <div className="payment-total">Total: $ {getBasketTotal(basket)}</div>
                 <StripeCheckoutButton price={getBasketTotal}>
                   
                 </StripeCheckoutButton>
              </div>
             </div>

           </div> 
        </div>
    )
}
 
export default Payment;
