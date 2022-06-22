import { CardElement, cardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link,useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { db } from './firebase';
import './Payment.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
function Payment() {
    const navigate=useNavigate();
    const [{basket,user},dispatch]=useStateValue();
    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState("");
    const [clientSecret,setClientSecret]=useState(true);
    const stripe=useStripe();
    const elements=useElements();
    const [error,setError]=useState(null);
    const [disabled,setDisabled]=useState(true);

    useEffect(()=>{
        // generate special stripe secret that allows us to charge the customer
        const getClientSecret=async()=>{
            const response= await axios({  // axios is a way of making request post request, get request any request
             method:'post',
             url: `/payments/create?Total=${getBasketTotal(basket)*100}`// here 100 is subcurrency
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])// this method is doing that when ever the basket changes it will make the special stripe request to change the basket total
    console.log('THE SECRET IS>>', clientSecret)
    const handleSubmit =async (event)=>{
        // do all fancy stripe stuff....
        event.preventDefault();
        setProcessing(true); // setting processin to true as once the buy now button is clicked it will be disabled
       
        
        const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
           
        }).then(({paymentIntent})=>{
            //paymentIntent = Payment confirmation
           // console.log("hellloooo")
            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                basket: basket,
                amount:paymentIntent.amount,
                created: paymentIntent.created
            })

            navigate('/orders',{replace:true})
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type:'EMPTY_BASKET'
            })

        })

    }
    const handleChange =event=>{
            //Listen for changes in the card element
            // display any errors as the customer types their card details
            setDisabled(event.empty); // if event is empty then disable the button
            setError(event.error ? event.error.message:"");// if there is  a error show the error else do nothing
    }
  return (
    <div className='payment'>
         <div className='payment__container'>
            <h1>
                Checkout(<Link to="'/checkout">{basket?.length} <small>:Products</small></Link>)
            </h1>
            {/*  Payment section -- Delivery address*/}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>Jammu and Kashmir</p>
                    <p>India</p>
                </div>
            </div>
            {/*  Payment section -- Review Section*/ }
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
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

            {/*  Payment section -- Payment method*/}
            <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* Stripe Magic */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className='payment__priceContainer'>
                            <CurrencyFormat 
                                    renderText={(value)=>(
                                       <h3>Order Total : {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p>:"Buy Now"}</span>
                                    </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
            </div>
         </div>
    </div>
  )
}

export default Payment