const API_URL = "https://yts.am/api/v2/list_movies.json";
import fetch from 'node-fetch';

export const getMoives = () => 
  fetch(`${API_URL}`)
    .then(res = res.json())
    .then(json => json.data.movies);