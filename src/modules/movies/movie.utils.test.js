const {
  moviesByActor,
  moviesBySimilarMatch,
  sortByRating,
  paginationResponse
} = require('./movie.utils.js');

describe('moviesByActor', () => {
  const movies = [
    { title: 'Movie 1', actors: ['Actor 1', 'Actor 2'] },
    { title: 'Movie 2', actors: ['Actor 2', 'Actor 3'] },
    { title: 'Movie 3', actors: ['Actor 1', 'Actor 3'] },
    { title: 'Movie 4', actors: ['Actor 4'] }
  ];

  test('should return movies with the given actor', () => {
    const actorName = 'Actor 2';
    const result = moviesByActor(movies, actorName);
    expect(result).toEqual([
      { title: 'Movie 1', actors: ['Actor 1', 'Actor 2'] },
      { title: 'Movie 2', actors: ['Actor 2', 'Actor 3'] }
    ]);
  });

  test('should return an empty array if actor not found', () => {
    const actorName = 'Actor 5';
    const result = moviesByActor(movies, actorName);
    expect(result).toEqual([]);
  });
});

describe('moviesBySimilarMatch', () => {
  const movies = [
    { title: 'Movie 1', genres: ['Action', 'Thriller'], actors: ['Actor 1', 'Actor 2'] },
    { title: 'Movie 2', genres: ['Comedy', 'Romance'], actors: ['Actor 2', 'Actor 3'] },
    { title: 'Movie 3', genres: ['Action', 'Drama'], actors: ['Actor 1', 'Actor 3'] },
    { title: 'Movie 4', genres: ['Horror'], actors: ['Actor 4'] }
  ];

  test('should return similar movies based on genre', () => {
    const movieName = 'Movie 1';
    const result = moviesBySimilarMatch(movies, movieName);
    expect(result).toContainEqual({title: 'Movie 3', genres: ['Action', 'Drama'], actors: ['Actor 1', 'Actor 3'] });
  });

  test('should return an empty array if movie not found', () => {
    const movieName = 'Movie 5';
    const result = moviesBySimilarMatch(movies, movieName);
    expect(result).toEqual([]);
  });
});

describe('sortByRating', () => {
  const movies = [
    { title: 'Movie 1', imdbRating: 7.5 },
    { title: 'Movie 2', imdbRating: 8.2 },
    { title: 'Movie 3', imdbRating: 6.8 }
  ];

  test('should sort movies by rating in descending order', () => {
    const result = sortByRating(movies);
    expect(result).toEqual([
      { title: 'Movie 2', imdbRating: 8.2 },
      { title: 'Movie 1', imdbRating: 7.5 },
      { title: 'Movie 3', imdbRating: 6.8 }
    ]);
  });
});

describe('paginationResponse', () => {
  const movies = [
    { title: 'Movie 1' },
    { title: 'Movie 2' },
    { title: 'Movie 3' },
    { title: 'Movie 4' }
  ];

  test('should return the current movie and pagination information', () => {
    const currentPage = 2;
    const result = paginationResponse(movies, currentPage);
    expect(result).toEqual({
      previousPage: 1,
      nextPage: 3,
      totalPages: 4,
      currentMovie: { title: 'Movie 2' },
      previousMovie: { title: 'Movie 1' },
      nextMovie: { title: 'Movie 3' },
      allMovies: movies
    });
  });

  test('should return the first movie if currentPage is not provided', () => {
    const movies = [
      { title: 'Movie 1', actors: ['Actor 1', 'Actor 2'] },
      { title: 'Movie 2', actors: ['Actor 2', 'Actor 3'] },
      { title: 'Movie 3', actors: ['Actor 1', 'Actor 3'] },
      { title: 'Movie 4', actors: ['Actor 4'] }
    ];

    const result = paginationResponse(movies);
    expect(result).toEqual(movies);
  });
});