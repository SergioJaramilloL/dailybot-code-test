const movies = require('./movies-database-v2.json')
const { moviesByActor,  moviesBySimilarMatch, sortByRating } = require('./movie.utils.js')

/**
 * 
 * @param {object} classifications - query parameters
 * @returns array of movies
 */
function getMovies(classifications){  
  const { movieName, actorName, rating } = classifications;
  let filteredMovies = movies;

  if(actorName){
   filteredMovies = moviesByActor(movies, 'Tom Cruise')
  }

  if(movieName) {
   filteredMovies = moviesBySimilarMatch(movies, movieName)
  }

  if(rating) {
   filteredMovies = sortByRating(movies)
  }

  return filteredMovies
}

module.exports = {
  getMovies
}