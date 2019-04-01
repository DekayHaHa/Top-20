import React from 'react';
import { shallow } from "enzyme";
import { Login, mapDispatchtoProps, mapStateToProps} from '../containers/Login'
import { mockReduxFavs, mockReduxMovies, mockReduxUser } from '../utilities/mockTestData'
import { signIn } from '../Thunks/signIn';
import { createUser } from '../Thunks/createUser';
jest.mock('../Thunks/createUser')
jest.mock('../Thunks/signIn')

describe("Login", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Login 
			movies={mockReduxMovies}
			activeUser={mockReduxUser}
			favorites={mockReduxFavs}
		/>);
		fetch = jest.fn(() => {
			return Promise.resolve({
				ok: true,
				json: jest.fn(() => ({ id: 2 }))
			});
		});
	});

	it("should match the snapshot with all data passed in correctly", () => {
		expect(wrapper).toMatchSnapshot();
	});

	it.skip("Should add user to back end", async () => {
		//setup
		const url = "http://localhost:3000/api/users/new";
		const mockUserInputs = {
			name: 'steve',
			password: 'imgreat',
			email: 'myemail'
		}
		const mockOptionObj = {
			method: "POST",
			body: JSON.stringify({...mockUserInputs, id: 1}),
			headers: {
				"Content-Type": "application/json"
			}}
		wrapper.setState({...mockUserInputs})
		const mockEvent = { target: null }
		//execution
		await wrapper.find('.signUp-btn').simulate('click', mockEvent)
		//expectation
		expect(fetch).toBeCalledWith(url, mockOptionObj)
	});

	it.skip("Should sign in user", async () => {
		//setup
		const url = "http://localhost:3000/api/users";
		const mockUserInputs = {
			name: 'steve',
			password: 'imgreat',
			email: 'myemail'
		}
		const mockOptionObj = {
			method: "POST",
			body: JSON.stringify({ ...mockUserInputs, id: 1 }),
			headers: {
				"Content-Type": "application/json"
			}
		}
		wrapper.setState({ ...mockUserInputs })
		const mockEvent = { target: null }
		//execution
		await wrapper.find('.signIn-btn').simulate('click', mockEvent)
		//expectation
		expect(fetch).toBeCalledWith(url, mockOptionObj)
	});
	it.skip("Should set state to name input", () => {
		//setup
		//execution
		wrapper.find('.signIn-btn').simulate('click')
		wrapper.update()
		wrapper.find('input.name-input').simulate('change', { target: { value: 'Hey' } });
		//expectation
		expect(wrapper.state('name')).toEqual('Hey')
	});
	it("Should set state to password input", () => {
		//setup
		//execution
		wrapper.find('input.password-input').simulate('change', { target: { value: 'Hey' } });
		//expectation
		expect(wrapper.state('password')).toEqual('Hey')
	});
	it("Should set state to email input", () => {
		//setup
		//execution
		wrapper.find('input.email-input').simulate('change', { target: { value: 'Hey' } });
		//expectation
		expect(wrapper.state('email')).toEqual('Hey')
	});
	it("Should check sign in inputs", () => {
		//setup
		expect(wrapper.instance().signInInputs()).toEqual(true)
		const mockInputs = {email: 'hey', password: 'hey', name: 'hey'}
		//execution
		wrapper.instance().setState(mockInputs)
		//expectation
		expect(wrapper.instance().signInInputs()).toEqual(false)

	});
	it("Should check sign up inputs", () => {
		//setup
		expect(wrapper.instance().signUpInputs()).toEqual(true)
		const mockInputs = { email: 'hey', password: 'hey', name: 'hey' }
		//execution
		wrapper.instance().setState(mockInputs)
		//expectation
		expect(wrapper.instance().signUpInputs()).toEqual(false)
	});
	it("should map state to props", () => {
		//setup
		const mockStore = { 
			activeUser: { name: 'steve', id: 2},
			movies: ['should not show']}
		const expected = {
			activeUser: { name: 'steve', id: 2 }
		}
		//execution
		const mappedProps = mapStateToProps(mockStore)
		//expectation
		expect(mappedProps).toEqual(expected)
	});
	it("should map signIn to props", () => {
		//setup
		const mockUserInfo = {
			name: 'Steve',
			password: 'secret',
			email: 'gmail'
		};
		const mockDispatch = jest.fn()
		const actionToDispatch = signIn(mockUserInfo)
		//execution
		const mappedProps = mapDispatchtoProps(mockDispatch)
		mappedProps.signIn(mockUserInfo)
		//expectation
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
	});
	it("should map createUser to props", () => {
		//setup
		const mockUserInfo = {
			id: 1,
			name: 'Steve',
			password: 'secret',
			email: 'gmail'
		};
		const mockDispatch = jest.fn()
		const actionToDispatch = createUser(mockUserInfo)
		//execution
		const mappedProps = mapDispatchtoProps(mockDispatch)
		mappedProps.createUser(mockUserInfo)
		//expectation
		expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
	});
});