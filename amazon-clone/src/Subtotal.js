import React from 'react'
import CurrencyFormat from "react-currency-format";
import './Subtotal.css';
{/* Will use react currency formater*/}
function Subtotal() {
  return (
    <div className='subtotal'>
       <CurrencyFormat 
       renderText={(value)=>(
           <>
           <p>
               Subtotal (0 items):<strong>0</strong>
           </p>
           <p className='Subtotal__gift'>
               <input type="checkbox"/> 
               This order contains a gift
           </p>
           </>
       )}
       decimalScale={2}
       value={0}
       displayType={"Text"}
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