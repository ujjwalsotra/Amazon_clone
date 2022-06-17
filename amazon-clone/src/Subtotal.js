import React from 'react'
import CurrencyFormat from "react-currency-format";
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
{/* Will use react currency formater*/}
function Subtotal() {
  const[{basket},dispatch]=useStateValue();
  return (
    <div className='subtotal'>
       <CurrencyFormat 
       renderText={(value)=>(
           <>
         <p>
             Subtotal ({basket.length} items):<strong>{value}</strong>
         </p>
         <small>

           <p className='Subtotal__gift'>
               <input type={'checkbox'}/> 
               This order contains a gift
           </p>
         </small>
           </>
       )}
       decimalScale={2}
       value={getBasketTotal(basket)}
       displayType={"text"}
       thousandSeparator={true}
       prefix={"$"}
       />
       <button>
         Proceed to Checkout
       </button>
    </div>
  );
}

export default Subtotal;