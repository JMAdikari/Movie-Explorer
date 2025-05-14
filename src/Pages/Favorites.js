import React from 'react';

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div>
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? <p>No favorite movies added.</p> : (
        favorites.map(movie => (
          <div key={movie.id}>{movie.title}</div>
        ))
      )}
    </div>
  );
};

export default Favorites;
