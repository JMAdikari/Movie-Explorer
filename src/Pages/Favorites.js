import React from 'react';

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-4">🎬 Your Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-400">You haven't added any favorite movies yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {favorites.map(movie => (
            <div key={movie.id} className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="rounded-md mb-2 w-full h-64 object-cover"
              />
              <h4 className="text-lg font-semibold truncate">{movie.title}</h4>
              <p className="text-yellow-400 text-sm">⭐ {movie.vote_average}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
