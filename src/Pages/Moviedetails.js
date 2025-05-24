import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../Services/Movieservice';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie).catch(console.error);
  }, [id]);

  if (!movie) return <div className="text-white p-6">Loading...</div>;

  const trailer = movie.videos?.results?.find(
    v => v.type === 'Trailer' && v.site === 'YouTube'
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg w-full md:w-1/3 h-auto object-cover shadow-lg"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
          <p className="text-gray-300 mb-4">{movie.overview}</p>
          <p className="text-yellow-400 mb-4">Rating: ⭐ {movie.vote_average}</p>

          {trailer && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Watch Trailer</h3>
              <iframe
                className="w-full h-64 rounded-lg"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                frameBorder="0"
                allowFullScreen
                title={`${movie.title} Trailer`} 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
