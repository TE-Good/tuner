const PORT = process.env.PORT || 8000

const dbURI = process.env.MONGO_URI || 'mongodb://localhost/tuner'

const secret = 'sauce'

module.exports = { PORT, dbURI, secret }