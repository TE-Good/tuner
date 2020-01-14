const express = require('express')
const mongoose = require('mongoose')
const app = express()

const { PORT, dbURI } = require('./config/enviroment')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(PORT, () => console.log(`Receiving on port ${PORT}`))