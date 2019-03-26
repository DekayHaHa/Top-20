import { cleanFavorites } from "./cleaner";

export const fetchData = url => {
  return fetch(url)
    .then(response => response.json())
    .catch(error => error.message);
};

export const retrieveAllFavorites = async url => {
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(response.statusText);
  } else {
    const data = await response.json();
    return await cleanFavorites(data.data);
  }
};


