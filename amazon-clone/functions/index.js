const functions = require("firebase-functions");
// We are gonna build and express app and host it on a cloud function
const express=require("express");
const cors=require("core");
const { request, response } = require("express");

const stripe=require("stripe")('sk_test_51LCkGlSBl9gxhyw1wrrlkyAH6KBl3tKoD7XTLaxJVPcPTehTet9WZhvXvsNH62xrmnBWAEAq0rlmY494OYr1PgKU00qV16T8PX')
// ALL TO SET UP AN API
// - App config

 const app=express();
// - Middlewares
app.use(cors({origin:true}));
app.use(express.json());
// - API routes
app.get('/',(request,response)=>response.status(200).send('Hello world'))
app.post('/payments/create',async (request,response)=>{
    const total=request.query.total;
    console.log('payment request Recieved BOOM !!! for this amount>>>',total)

    const paymentIntent=await stripe.paymentIntent.create({
        amount:total,
        currency:"usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command

exports.api=functions.https.onRequest(app);
// to run this on our local machine we need to emulate it so we run firebase emulators:start