const express = require('express')
const cors = require('cors')

// initialize server
const app = express()
app.use(express.json({ limit: 1024 * 1024 * 10 }))
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: true }))

// test api request
app.get('/', async (req, res) => {
  return res.status(200).send('API is ready')
})

module.exports = app