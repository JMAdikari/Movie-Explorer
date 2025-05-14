import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <Link to={`/movie/${movie.id}`}>
    <div style={{ width: '200px', border: '1px solid gray', padding: '10px' }}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        style={{ width: '100%' }}
      />
      <h4>{movie.title}</h4>
      <p>{movie.release_date}</p>
      <p>⭐ {movie.vote_average}</p>
    </div>
  </Link>
);

export default MovieCard;
