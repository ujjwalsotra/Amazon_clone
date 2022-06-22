const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
const { request, response } = require("express");
const stripe=require("stripe")('HERE IS STRIPE SECRET KEY 😀')


const app=express();

app.use(cors({origin:true}));
app.use(express.json());

app.get('/',(request,response)=>response.status(200).send('hello'))
app.get('/ujjwal',(request,response)=>response.status(200).send('ujjwal'))

app.post('/payments/create', async(request,response)=>{
    const total=request.query.total;

    console.log('Payment Request Recieved BOOM !!! amount>> ',total)
    const paymentIntent=await stripe.paymentIntent.create({
        amount:total,
        currency:"usd",
    });
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

exports.api=functions.https.onRequest(app);
