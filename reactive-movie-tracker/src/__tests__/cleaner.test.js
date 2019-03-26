import * as cleaners from "../utilities/cleaner";

describe("cleanMovies", () => {
  const mockMovies = [{
    vote_count: 1,
    id: 2,
    video: false,
    vote_average: 6.9,
    title: "Aquaman",
    popularity: 805.109,
    poster_path: "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
    original_language: "en",
    original_title: "Aquaman",
    overview : "Fishman does stuff",
    release_date: "September 16th"
  }];
  const mockResult = [{
    title: "Aquaman",
    image: "https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
    overview : "Fishman does stuff",
    score : 6.9,
    id : 2,
    isFavorite: true,
    releaseDate : "September 16th"


  }];
  it("should clean the mockMovies when cleanMovies is invoked", () => {
    const result = cleaners.cleanMovies(mockMovies)
    expect(result).toEqual(mockResult)
  })
});

describe("cleanFavorties", () => {
  const mockMovies = [{
    vote_count: 1,
    movie_id: 2,
    video: false,
    vote_average: 6.9,
    title: "Aquaman",
    popularity: 805.109,
    poster_path: "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
    original_language: "en",
    original_title: "Aquaman",
    overview : "Fishman does stuff",
    release_date: "September 16th"
  }];
  const mockResult = [{
    title: "Aquaman",
    image: "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
    overview : "Fishman does stuff",
    score : 6.9,
    id : 2,
    isFavorite: false,
    releaseDate : "September 16th"


  }];
  it("should clean the favorites when cleanFavorites is invoked", () => {
    const result = cleaners.cleanFavorites(mockMovies)
    expect(result).toEqual(mockResult)
  })
});
