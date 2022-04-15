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

// stripe checkout
app.post('/stripe/checkout', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [{
      price_data: {
        currency: 'usd',
        unit_amount: 999,
        product_data: {
          name: 'Professional CV from cvwizard.io'
        },
      },
      quantity: 1
    }],
    mode: 'payment',
    success_url: `https://cvwizard.io/download/`,
    cancel_url: 'https://cvwizard.io/'
  })
  res.json(session)
})

module.exports = app