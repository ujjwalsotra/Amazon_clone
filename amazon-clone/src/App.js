import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Product from './Product';

import {BrowserRouter as Router, Routes, Route}
from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements, useStripe} from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise=loadStripe('pk_test_51LCkGlSBl9gxhyw1FncKF17AUXR2bU1WwSh3iqlpG6DEepyZ23BTKalxOzGA4r7S3R0UrqGcUzfA1WQFJIL2nZqq00Hn61CoXk');
function App() {
  const [{},dispatch]=useStateValue();
  useEffect(()=>{
    //will only runs once when the app component loads
    auth.onAuthStateChanged(authUser=>{
      console.log('the user is >>>',authUser);
      if(authUser)
      {
        //the user logged in or was logged in
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }
      else
      {
        dispatch({
          type: 'SET_USER',
          user:null
        })
        // user is logged out
      }
    })
  },[])
  return (
      <Router>
    <div className="app">
      <Header/>
    <Routes> {/* Previously was Switch */}
        <Route path="/orders" element={[<Orders/>]}>
        
        </Route>
        <Route path="/login" element={[<Login/>]}>
        
        </Route>

          <Route path="/checkout" element={[<Checkout/>]}>
        
       </Route>
       <Route path="/payment" element={<Elements stripe={promise}>
        [<Payment/>]
       </Elements>}> 
        
        
       </Route>

      <Route path="/" element={[<Home/>]} >
          {/* When i am at this root render the header and home component*/}
       
       </Route>



    </Routes>
     
     
    </div>
    </Router>
  );
}

export default App;
