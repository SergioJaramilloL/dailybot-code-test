const { getMovies } = require('./movie.services')
const { paginationResponse } = require('./movie.utils.js')

async function getMoviesController(req, res) {
  const { movieName, actorName, rating, currentPage} = req.query

  try {
    const movies = getMovies({ movieName, actorName, rating })
    const response = paginationResponse(movies, parseInt(currentPage))

    res.status(200).json({ message: "Comment found", data: response })
  } catch (err) {
    res.status(400).json({ message: "Movies not found", data: err })
  }
}

module.exports = { getMoviesController }