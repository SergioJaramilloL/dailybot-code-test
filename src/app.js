const express = require('express')
const routes = require('./routes')
const { createServer } = require('http')
const configExpress = require('./config/express')

//setup server
const app = express()
const server = createServer(app)

//setup express
configExpress(app)
//routes
routes(app)

module.exports = {
  server,
  app
}