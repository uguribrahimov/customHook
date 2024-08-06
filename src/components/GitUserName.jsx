import React, { useState } from 'react';
import useGitHubUser from '../customHook/user';

function GitHubUserInfo() {
  const [username, setUsername] = useState('');
  const { user, loading, error } = useGitHubUser(username);

  const handleSearch = () => {
    if (username.trim() !== '') {
      setUsername(username.trim());
    }
  };

  return (
    <div>
      <h1>GitHub User Info</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {user && (
        <div>
          <h2>{user.name} ({user.login})</h2>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <p>{user.bio}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Public Repos: {user.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default GitHubUserInfo;
