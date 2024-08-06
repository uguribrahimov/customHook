import { useState, useEffect } from 'react';
import axios from 'axios';

function useGitHubUser(username) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    setLoading(true);
    setError(null);

    axios.get(`https://api.github.com/users/${username}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [username]);

  return { user, loading, error };
}

export default useGitHubUser;
