const express = require('express')
const mongoose = require('mongoose')
const app = express()

const router = require('./config/router')
const { PORT, dbURI } = require('./config/enviroment')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/api', router)

app.listen(PORT, () => console.log(`Receiving on port ${PORT}`))