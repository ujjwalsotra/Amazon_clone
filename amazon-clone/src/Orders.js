import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import Order from './Order';
import './Orders.css'
import { useStateValue } from './StateProvider';

function Orders() {
  const [{basket,user},dispatch]=useStateValue();
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
      if(user)
      {
        db.collection('user').doc(user?.uid).collection('orders').orderBy('created','desc').onSnapshot(onSnapshot=>(
            setOrders(onSnapshot.docs.map(doc=>({
              id:doc.id,
              data:doc.data()
            })))
        ))

      }
      else
      {
        setOrders([])
      }
    },[user])
   
  return (
    <div className='orders'>
        <h1>Your orders</h1>
        <div className='orders__order'>
          {orders?.map(order=>(
            <Order order={order}/>
          ))}
        </div>
    </div>
  )
}

export default Orders;