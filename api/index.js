const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// initialize server
const app = express()
app.use(express.json({ limit: 1024 * 1024 * 10 }))
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: true }))

// test api request
app.get('/api', async (req, res) => {
  return res.status(200).send('API is ready')
})

// stripe checkout
app.post('/api/checkout', async (req, res) => {
  const cvDownloadUrl = req.body.cv_download_url

  let sessionParams = {
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: 195,
          product_data: {
            name: 'cvwizard.online PDF Download',
            images: [
              'https://cvwizard.online/images/cv.png'
            ]
          }
        },
        quantity: 1
      }
    ],
    metadata: {
      cv_download_url: cvDownloadUrl
    },
    mode: 'payment',
    payment_intent_data: {
      metadata: {
        cv_download_url: cvDownloadUrl
      }
    },
    success_url: `https://cvwizard.online/thank-you?download_url=${cvDownloadUrl}`,
    cancel_url: 'https://cvwizard.online/'
  }

  const session = await stripe.checkout.sessions.create(sessionParams)

  return res.status(200).send(session)
})

module.exports = app