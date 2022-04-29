const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// initialize server
const app = express()
app.use(express.json({ limit: 1024 * 1024 * 10 }))
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: true }))

// test api request
app.get('/', async (req, res) => {
  return res.status(200).send('API is ready')
})

app.post('/create-payment-intent', async (req, res) => {
  // create a payment intent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 995,
    currency: 'usd',
    description: 'Professional CV from cvwizard.io',
    payment_method_types: ['card']
  })

  res.send({
    clientSecret: paymentIntent.client_secret
  })
})

module.exports = app