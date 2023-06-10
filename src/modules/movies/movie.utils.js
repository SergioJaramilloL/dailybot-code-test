/**
 * 
 * @param {array} movies - list of movies
 * @param {string} actorName - actor name
 * @returns array of movies
 */
function moviesByActor(movies, actorName) {
  return movies.filter(item => item.actors.includes(actorName));
}

/**
 * 
 * @param {array} movies - list of movies
 * @param {string} movieName - name of movie
 * @returns array of movies
 */
function moviesBySimilarMatch(movies, movieName) {
  const targetMovie = movies.find(movie => movie.title === movieName);
  
  if (!targetMovie) {
    return [];
  }
  
  const similarMovies = movies.filter(movie =>
    movie.title !== movieName &&
    (
      movie.genres.some(genre => targetMovie.genres.includes(genre)) ||
      movie.actors.some(actor => targetMovie.actors.includes(actor))
    )
  );
  
  return similarMovies;
}

/**
 * 
 * @param {array} movies - list of movies
 * @returns array of movies
 */
function sortByRating(movies) {
  return movies.sort((a, b) => b.imdbRating - a.imdbRating);
}

/**
 * 
 * @param {array} movies - list of movies
 * @param {number} currentPage - current page
 * @returns object with pagination movies
 */
function paginationResponse(movies, currentPage) {
  if(!currentPage) {
    return movies
  }

  const pageSize = 1;
  const totalMovies = movies.length;
  const totalPages = Math.ceil(totalMovies / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentMovie = movies[startIndex];
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;
  
  const prevMovie = movies[startIndex - 1] || null;
  const nextMovie = movies[startIndex + 1] || null;

  return {
    previousPage: prevPage,
    nextPage: nextPage,
    totalPages: totalPages,
    currentMovie: currentMovie,
    previousMovie: prevMovie,
    nextMovie: nextMovie,
    allMovies: movies,
  };
}


module.exports = { 
  moviesByActor,  
  moviesBySimilarMatch, 
  sortByRating, 
  paginationResponse 
}