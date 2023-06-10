const healthcheck = require('./modules/healthcheck')

function routes(app) {
  app.use('/api/healthcheck', healthcheck)
}

module.exports = routes