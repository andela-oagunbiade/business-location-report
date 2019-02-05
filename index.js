require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const reportRouter = require('./app/routes/report')

const port = process.env.PORT
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send({ message: 'running...' })
})

app.use('/reports', reportRouter)

app.listen(port)
