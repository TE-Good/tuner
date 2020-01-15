const router = require('express').Router()
const tunings = require('../controllers/tunings')

router.route('/tuner')
  .get(tunings.index)

module.exports = router