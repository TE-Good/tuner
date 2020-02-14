const router = require('express').Router()
const tunings = require('../controllers/tunings')
const users = require('../controllers/auth')
const secureRoot = require('../lib/secureRoot')

router.route('/tuner')
  .get(tunings.index)

router.route('/profile')
  .get(secureRoot, users.profile)

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

module.exports = router