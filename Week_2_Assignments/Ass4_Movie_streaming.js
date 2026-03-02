const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. filter() Sci-Fi movies
const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");

// 2. map() "Title (Rating)"
const movieList = movies.map(
  movie => `${movie.title} (${movie.rating})`
);

// 3. reduce() average rating
const avgRating = movies.reduce(
  (total, movie) => total + movie.rating,
  0
) / movies.length;

// 4. find() Joker
const jokerMovie = movies.find(movie => movie.title === "Joker");

// 5. findIndex() Avengers
const avengersIndex = movies.findIndex(movie => movie.title === "Avengers");

console.log(sciFiMovies);
console.log(movieList);
console.log(avgRating);
console.log(jokerMovie);
console.log(avengersIndex);