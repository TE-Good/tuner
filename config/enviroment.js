const PORT = process.env.PORT || 8000

const dbURI = process.env.MONGO_URI || 'mongodb://localhost/tuner'

module.exports = { PORT, dbURI }