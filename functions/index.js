const functions = require("firebase-functions");
const express = require ("express");
const cors = require("cors");
const stripe= require("stripe")('sk_test_51HtEeUIPopMtak8896CnhT3CxQY0nFCPtqiQzEljhSPilvGaor27YVd2igF0uZWdOgzvas2RWhaL2XdvpxUYlBmu00lmLBDnzp');


//app congih
const app=express();

// middlewares
app.use(cors({ origin: true}));
app.use(express.json());

//api routes
app.get('/', (request,response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) =>{
    const total= request.query.total;

    console.log("Payment total: ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });

      response.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
})

//listen command
exports.api = functions.https.onRequest(app);

 