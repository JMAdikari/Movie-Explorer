import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="w-64 border-2 border-yellow-400 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 bg-gray-900"
    >
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-700 outline outline-1 outline-gray-600 hover:outline-yellow-400">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-4 text-white">
          <h4 className="text-base font-semibold truncate">{movie.title}</h4>
          <p className="text-sm text-gray-400 mt-1">{movie.release_date}</p>
          <p className="text-sm text-yellow-400 mt-1">⭐ {movie.vote_average}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
