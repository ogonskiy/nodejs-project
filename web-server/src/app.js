const express = require('express')
const { forecast } = require('./utils/forecast')
const { geocode } = require('./utils/geocode')

const app = express()
const port = process.env.PORT || 3000

app.get('', (req, res) => {
  res.send({
    message: 'hello'
  })
})

app.get('/help', (req, res) => {
  res.send({
    name: 'Sam',
    age: 21
  })
})

app.get('/about', (req, res) => {
  res.send('About page')
})

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'No address provided'
    })
  }

  geocode(req.query.address, (error, data = {}) => {
    if (error) {
      return res.send({ error })
    }
    if (data) {
      forecast(data.lat, data.lon, (error, forecastData) => {
        if (error) {
          return res.send({ error })
        }
        res.send({
          forecast: forecastData,
          location: data.place,
          address: req.query.address
        })
      })
    }
  })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}!`)
})
