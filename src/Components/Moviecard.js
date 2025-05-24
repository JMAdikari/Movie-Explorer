import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <Link to={`/movie/${movie.id}`} className="w-48 ml-4"> {/* Added left margin */}
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-600">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-3 text-white">
        <h4 className="text-lg font-bold truncate text-white">{movie.title}</h4>
        <p className="text-sm text-gray-400">{movie.release_date}</p>
        <p className="text-sm text-yellow-400">⭐ {movie.vote_average}</p>
      </div>
    </div>
  </Link>
);

export default MovieCard;
