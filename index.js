const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')

const router = require('./config/router')
const { PORT, dbURI } = require('./config/enviroment')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.use('/api', router)

app.listen(PORT, () => console.log(`Receiving on port ${PORT}`))