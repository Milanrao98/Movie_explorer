import React, { useRef } from "react";

export default function SearchBar({ query, setQuery }) {
  const inputRef = useRef();

  const handleSearch = () => {
    setQuery(inputRef.current.value);
  };

  return (
    <div className="search-bar">
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Search movies..." 
        defaultValue={query}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
