import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("/movies.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find((m) => m.id === parseInt(id));
        setMovie(found);
        document.title = found ? found.title : "Movie Explorer";
      });
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title} ({movie.year})</h2>
      <p><b>Genre:</b> {movie.genre}</p>
      <p><b>Rating:</b> ⭐ {movie.rating}</p>
      <p>{movie.description}</p>
    </div>
  );
}
