import React from 'react';
import Moviecard from './Moviecard';

const Movielist = ({ movies }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
    {movies.map(movie => (
      <Moviecard key={movie.id} movie={movie} />
    ))}
  </div>
);

export default Movielist;
