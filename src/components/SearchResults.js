// src/components/SearchResults.js
import React from 'react';
import RepositoryItem from './RepositoryItem';

function SearchResults({ results, loading, error }) {
  if (loading) {
    return <p>Loading repositories...</p>;
  }

  if (error) {
    return <p>Error fetching repositories: {error}</p>;
  }

  if (!results || results.length === 0) {
    return <p>No repositories found.</p>;
  }

  return (
    <div className="search-results">
      {results.map(repo => (
        <RepositoryItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

export default SearchResults;