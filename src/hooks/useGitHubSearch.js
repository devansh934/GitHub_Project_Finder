// src/hooks/useGitHubSearch.js
import { useState, useEffect } from 'react';

function useGitHubSearch(searchTerm) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=${searchTerm}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setResults(data.items || []);
      } catch (e) {
        setError(e.message);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, [searchTerm]);

  return { results, loading, error };
}

export default useGitHubSearch;