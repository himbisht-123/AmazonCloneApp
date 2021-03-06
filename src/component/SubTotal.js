import React from 'react';
import '../styling/SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider';
import {getBasketTotal} from '../reducer';
import { useHistory } from 'react-router-dom';

function SubTotal() {
    const [{basket}]=useStateValue();
    const history=useHistory();
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value)=>(
               <>
               <p>Subtotal ({basket.length} items):<strong>{value}</strong></p>
               <small className="subtotal-gift">
                <input type="checkbox"></input>
                This order contains a gift
               </small>
               </>     
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button onClick={e=>history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal
