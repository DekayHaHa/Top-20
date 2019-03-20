import { fetchData } from '../utilities/api';

describe('fetchData', () => {
  const mockURL = 'www.reddit.com';
  const mockMoviesData = ['movies'];
  beforeEach(() => {
    window.fetch = jest.fn(() => {
      return Promise.resolve({
        ok: true,
        json: jest.fn(() => mockMoviesData)
      });
    });
  });

  it('should call fetch with the correct parameters', () => {
    fetchData(mockURL);
    expect(window.fetch).toHaveBeenCalledWith(mockURL);
  });

  it('should return data when response is successful', async () => {
    const result = await fetchData(mockURL);
    expect(result).toEqual(mockMoviesData);
  });

  it('should throw an error when response is not successful', () => {
    window.fetch = jest.fn(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'Error',
        status: '500'
      });
    });
    const expectedError = Error('Error - Status 500');
    expect(fetchData(mockURL)).rejects.toEqual(expectedError);
  });
});