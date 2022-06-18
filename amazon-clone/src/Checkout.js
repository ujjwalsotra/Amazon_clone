import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket,user},dispatch]=useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout__left'>
            <img className='checkout__ad' 
            src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/Feb/CLP_Revamp/Herotator/5_1242x450_new.jpg'
             alt='Advertisement'/>

             <div>
                <h3>Hello, {user?.email}</h3>
                 <h2 className='checkout__title'>
                     Your shopping basket
                 </h2>
                 {/*Basket*/}
                    {basket.map(item=>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                 {/*Basket*/}
                 {/*Basket*/}
                 {/*Basket*/}
                 {/*Basket*/}
             </div>
        </div>
        <div className='checkout__right'>
            <Subtotal/>
            
        </div>
    </div>
  )
}

export default Checkout