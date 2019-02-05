require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const reportRouter = require('./app/routes/report')

const port = process.env.PORT
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send({ message: 'running...' })
})

app.use('/reports', reportRouter)

app.use('*', (req, res) => {
  res.sendStatus(404)
})

const errorHandler = (err, req, res, next) => {
  console.log('-------Err', err)
  res.status(500).send({ error: err.name })
}
app.use(errorHandler)

app.listen(port)
