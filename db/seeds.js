const mongoose = require('mongoose')
const { dbURI } = require('../config/enviroment')
const Tuning = require('../models/tuning')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err, db) => {
  db.dropDatabase()
  if (err) return console.log(err)

  Tuning.create([
    { name: 'Standard', notes: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'] }, 
    { name: 'Half-Step Down', notes: ['D#2', 'G#2', 'C#3', 'F#3', 'A#3', 'D#4'] }
  ])
    .then(tunings => console.log(`${tunings.length} tunings created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})