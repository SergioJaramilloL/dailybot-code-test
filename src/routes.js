const healthcheck = require('./modules/healthcheck')
const movies = require('./modules/movies')

function routes(app) {
  app.use('/api/healthcheck', healthcheck)
  app.use('/api/movies', movies)
}

module.exports = routes