const functions = require("firebase-functions");

const express=require("express");

const cors=require("cors");
const { request, response } = require("express");

const stripe= require("stripe")('sk_test_51LCkGlSBl9gxhyw1wrrlkyAH6KBl3tKoD7XTLaxJVPcPTehTet9WZhvXvsNH62xrmnBWAEAq0rlmY494OYr1PgKU00qV16T8PX');

const async=require("async");
// API


// - App config

const app=express();

// -Middlewares
app.use(cors({origin:true}));
app.use(express.json());

// -API routes
app.get('/',(request,response)=>response.status(200).send('hello world'));
app.post('/payments/create',async(request,response)=>{
    const total=request.query.total;
    console.log('payemnt request recieved',total)

    const paymentIntent=await stripe.paymentIntent.create({
        amount:total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

// -Listen  command
exports.api=functions.https.onRequest(app);

// Example endpoint
//http://localhost:5001/student-hub-9bbd8/us-central1/api