const jwt = require('jsonwebtoken')
const { secret } = require('../config/enviroment')
const User = require('../models/User')

function secureRoot(req, res, next) {

  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) return res.status(401).json({ error: 'Unauthorised1' })

  const token = req.headers.authorization.replace('Bearer ', '')

  jwt.verify(token, secret, (err, payload) => {
    if (err) return res.status(401).json({ error: 'Unauthorised2' })

    User
      .findById(payload.sub)
      // .populate()
      .then(user => {
        if (!user) return res.status(401).json({ error: 'Unauthorised3' })
        req.currentUser = user
        next()
      })
      .catch(() => res.status(401).json({ error: 'Unauthorised4' }))
  })
}

module.exports = secureRoot