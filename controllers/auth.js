const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/enviroment')

function register(req, res) {
  User
    .create(req.body)
    .then(user => res.status(201).json({ message: `Thanks for registering ${user.username}` }))
    .catch(err => res.status(422).json(err))
}

function login(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '24hr' })
      res.status(202).json({ message: `Hi ${user.username}. Your token is ${token}`, token })
    })
    .catch(err => res.status(401).json(err))
}

module.exports = { register, login }