import { cleanFavorites } from './cleaner'

export const fetchData = async url => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return await response.json()
    }
  } catch (error) {
    return error.message || error
  }
};

export const retrieveFavoritesIds = async id => {
  const url = `http://localhost:3000/api/users/${id}/favorites`
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      const data = await response.json();
      return await cleanFavorites(data.data);
    }
  } catch (error) {
    return error.message || error
  }
};

export const handleFavotires = async (toggle, movieInfo, url) => {
  try{
    return await fetch(url, {
      method: toggle, // DELETE
      body: JSON.stringify(movieInfo),
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return error.message
  }
}


