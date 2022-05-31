import React from 'react'
import './Checkout.css';

function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' 
            src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/Feb/CLP_Revamp/Herotator/5_1242x450_new.jpg'
             alt='Advertisement'/>

             <div>
                 <h2 className='checkout__title'>
                     Your shopping basket
                 </h2>
                 {/*Basket*/}
                 {/*Basket*/}
                 {/*Basket*/}
                 {/*Basket*/}
                 {/*Basket*/}
             </div>
        </div>
        <div className='checkout__right'>
            <h2>The subtotal will be here</h2>
        </div>
    </div>
  )
}

export default Checkout