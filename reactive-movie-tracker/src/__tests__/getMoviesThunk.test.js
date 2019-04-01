import { getMovies } from '../Thunks/getMovies'
import { mockReduxMovies } from '../utilities/mockTestData'
import { isLoading, hasError, addMovies } from '../actions/index'
import { cleanMovies } from '../utilities/cleaner'
jest.mock('../utilities/cleaner')

describe('getMovies', () => {
	let mockUrl
	let mockDispatch

	beforeEach(() => {
		mockUrl = 'www.redit.com'
		mockDispatch = jest.fn()
	})

	it('calls dispatch with the isLoading action', () => {

		const thunk = getMovies(mockUrl)
		// This is the 'inner function' that is returned

		thunk(mockDispatch)

		expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
	})

	it('should dispatch hasErrored with a message if the response is not ok', async () => {
		window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
			ok: false,
			statusText: 'No movies for you'
		}))

		const thunk = getMovies(mockUrl)

		await thunk(mockDispatch)

		expect(mockDispatch).toHaveBeenCalledWith(hasError('No movies for you'))
	})

	it('should dispatch isLoading(false) if the response is ok', async () => {
		window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
			ok: true,
		}))

		const thunk = getMovies(mockUrl)

		await thunk(mockDispatch)

		expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
	})

	it('should dispatch addMovies with cleaned data', async () => {
		window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
			ok: true,
			json: () => Promise.resolve({
				results: mockReduxMovies
			})
		}))

		const thunk = getMovies(mockUrl)

		await thunk(mockDispatch)

		expect(cleanMovies).toHaveBeenCalledWith(mockReduxMovies)

		expect(mockDispatch).toHaveBeenCalledWith(addMovies())
	})

})