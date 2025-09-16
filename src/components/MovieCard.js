import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie, addToWatchlist }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.rating}</p>
      <div>
        <Link to={`/movie/${movie.id}`} className="btn">Details</Link>
        <button onClick={() => addToWatchlist(movie)}>+ Watchlist</button>
      </div>
    </div>
  );
}
