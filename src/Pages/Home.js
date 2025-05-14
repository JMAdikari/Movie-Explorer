import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../Services/Movieservice';
import MovieList from '../Components/Movielist';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
