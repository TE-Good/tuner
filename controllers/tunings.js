const Tuning = require('../models/tuning')

function index(req, res, next) {
  Tuning
    .find()
    .then(tunings => res.status(200).json(tunings))
    .catch(() => res.status(404).json({ message: 'Not Found' }))
}

module.exports = { index }