let movies = [
  {
    id: 1,
    name: "Avengers",
    rating: 10,
  },
  {
    id: 2,
    name: "Hunger Games",
    rating: 8,
  },
  {
    id: 3,
    name: "Maze Runner",
    rating: 9,
  },
  {
    id: 4,
    name: "Star Wars",
    rating: 9.5,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  return filteredMovies[0];
};

export const addMovie = (name, rating) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    rating,
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => id !== movie.id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
