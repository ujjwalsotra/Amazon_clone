import React, { useEffect, useState } from 'react'
import './Orders.css'

function Orders() {
    const [orders,setOrders]=useState([]);
   
  return (
    <div className='orders'>
        <h1>Your orders</h1>
    </div>
  )
}

export default Orders;