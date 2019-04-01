import * as actions from "../actions";

describe("actions", () => {
  it("should return a type of ADD_MOVIES with movies", () => {
    const movies = [
      {
        vote_count: 1,
        id: 2,
        video: false,
        vote_average: 6.9,
        title: "Aquaman",
        popularity: 805.109,
        poster_path: "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
        original_language: "en",
        original_title: "Aquaman"
      }
    ];
    const expected = {
      type: "ADD_MOVIES",
      movies
    };
    const result = actions.addMovies(movies);
    expect(result).toEqual(expected);
  });

  it("should return a type of SIGNIN_USER with id and name", () => {
    const id = 1;
    const name = "Tom";
    const expected = {
      type: "SIGNIN_USER",
      id,
      name
    };
    const result = actions.signInUser(id, name);
    expect(result).toEqual(expected);
  });

  it("should return a type of SIGN_OUT_USER", () => {
    const expected = {
      type: "SIGN_OUT_USER",
    };
    const result = actions.signOutUser();
    expect(result).toEqual(expected);
  });

});
