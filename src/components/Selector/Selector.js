import React from 'react';

export default function Selector({ query, setQuery }) {
  return (
    <div>
      <input
        value={query}
        placeholder="search here"
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
}
