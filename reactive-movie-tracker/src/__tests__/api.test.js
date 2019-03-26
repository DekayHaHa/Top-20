import { fetchData, retrieveAllFavorites } from "../utilities/api";
import * as cleaners from "../utilities/cleaner";

describe("fetchData", () => {
  const mockURL = "www.reddit.com";
  const mockMoviesData = ["movies"];
  beforeEach(() => {
    window.fetch = jest.fn(() => {
      return Promise.resolve({
        ok: true,
        json: jest.fn(() => mockMoviesData)
      });
    });
  });

  it("should call fetch with the correct parameters", () => {
    fetchData(mockURL);
    expect(window.fetch).toHaveBeenCalledWith(mockURL);
  });

  it("should return data when response is successful", async () => {
    const result = await fetchData(mockURL);
    expect(result).toEqual(mockMoviesData);
  });

  it("should throw an error when response is not successful", () => {
    window.fetch = jest.fn(() => {
      return Promise.resolve({
        ok: false,
        statusText: "Error",
        status: "500"
      });
    });
    const expectedError = Error("Error - Status 500");
    expect(fetchData(mockURL)).rejects.toEqual(expectedError);
  });
});

describe("retrieveAllData", () => {
  const mockURL = "www.reddit.com";
  const mockMoviesData = [];
  const mockCleanedMovie = {};

  cleaners.cleanFavorites = jest.fn(() => {
    return mockCleanedMovie;
  });

  beforeEach(() => {
    window.fetch = jest.fn(() => {
      return Promise.resolve({
        ok: true,
        json: jest.fn(() =>
          Promise.resolve({
            data: mockMoviesData
          })
        )
      });
    });
  });

  it("should call fetch with the correct parameters", () => {
    const expectedOptions = {};
    retrieveAllFavorites(mockURL);
    expect(window.fetch).toHaveBeenCalledWith(mockURL);
  });

  it("should return data when response is successful", async () => {
    const result = await retrieveAllFavorites(mockURL);
    expect(result).toEqual(mockCleanedMovie);
  });

  it("should throw an error when response is not successful", async () => {
    window.fetch = jest.fn(() => {
      return Promise.resolve({
        ok: false,
        statusText: "Error",
        status: "500"
      });
    });
    const expectedError = Error("Error");
    await expect(retrieveAllFavorites(mockURL)).rejects.toEqual(expectedError);
  });
});
