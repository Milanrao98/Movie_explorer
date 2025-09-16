import React, { useState, useEffect } from "react";

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(saved);
  }, []);

  const removeFromWatchlist = (id) => {
    const updated = watchlist.filter((m) => m.id !== id);
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  return (
    <div>
      <h2>📌 My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies in watchlist.</p>
      ) : (
        <ul>
          {watchlist.map((m) => (
            <li key={m.id}>
              {m.title} 
              <button onClick={() => removeFromWatchlist(m.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
