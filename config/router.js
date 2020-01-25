const router = require('express').Router()
const tunings = require('../controllers/tunings')
const users = require('../controllers/auth')

router.route('/tuner')
  .get(tunings.index)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

module.exports = router