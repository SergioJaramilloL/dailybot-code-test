require('dotenv').config()

const { server } = require('./app')

function startServer() {
  const PORT = process.env.PORT || 8080
  server.listen(PORT, () => {
      console.log(`Server running 🤖🚀 at http://localhost:${PORT}/`)
    })
}

setImmediate(startServer)

module.exports = { server }