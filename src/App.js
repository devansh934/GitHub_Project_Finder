// src/App.js
// src/App.js
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import useGitHubSearch from './hooks/useGitHubSearch';
import ScratchVisualizer from './components/ScratchVisualizer'; // Make sure this line is present
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const { results, loading, error } = useGitHubSearch(searchTerm);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="app">
      <h1>GitHub Project Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} loading={loading} error={error} />
      {results && results.length > 0 && (
        <div className="visualizations">
          <h2>Scratch-like Visualization (Based on Stars)</h2>
          {results.map(repo => (
            <div key={repo.id}>
              <h3>{repo.full_name}</h3>
              <ScratchVisualizer stars={repo.stargazers_count} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;