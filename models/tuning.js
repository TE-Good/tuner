const mongoose = require('mongoose')

const tuningSchema = new mongoose.Schema({
  name: { type: String, required: true },
  notes: [{ type: String, required: true }]
})

module.exports = mongoose.model('Tuning', tuningSchema)