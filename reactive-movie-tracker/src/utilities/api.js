import {cleanFavorites} from './cleaner'

export const fetchData = (url) => {
  return fetch(url)  
    .then(response => response.json())
    .catch(error => error.message)
}

export const retrieveAllFavorites = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const data = await response.json();
  return await cleanFavorites(data.data) 
};