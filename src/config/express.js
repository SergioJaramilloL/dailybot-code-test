const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

function configExpress(app) {
  app.use(cors())
  app.use(morgan('dev'))
  app.use(express.json())
}

module.exports = configExpress