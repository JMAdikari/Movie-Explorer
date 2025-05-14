import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../Services/Movieservice';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie).catch(console.error);
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  const trailer = movie.videos.results.find(v => v.type === "Trailer" && v.site === "YouTube");

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      {trailer && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default MovieDetails;
