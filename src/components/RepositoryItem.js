// src/components/RepositoryItem.js
import React from 'react';

function RepositoryItem({ repo }) {
  return (
    <div className="repository-item">
      <h3><a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.full_name}</a></h3>
      <p>{repo.description}</p>
      <div className="repo-details">
        <span>Stars: {repo.stargazers_count}</span>
        <span>Forks: {repo.forks_count}</span>
        <span>Language: {repo.language}</span>
      </div>
    </div>
  );
}

export default RepositoryItem;