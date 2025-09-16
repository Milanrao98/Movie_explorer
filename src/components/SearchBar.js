import React from "react";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        value={query} // controlled input
        onChange={(e) => setQuery(e.target.value)} // update query on typing
      />
    </div>
  );
}
