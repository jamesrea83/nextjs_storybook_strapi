import {
	reducer,
	initialState,
	login,
	logout,
	registration,
} from './userSlice';
import { mockUser, ValidationError, RegistrationError } from '@/mocks/user';
import { storeCreator as globalStoreCreator } from '@/store';

const rootReducer = {
	user: reducer,
};

const storeCreator = () => globalStoreCreator(rootReducer);

const updatedState = {
	jwt: mockUser.jwt,
	username: mockUser.user.username,
	email: mockUser.user.email,
};

const loginData = {
	identifier: mockUser.user.email,
	password: mockUser.user.password,
};

const registrationData = {
	username: mockUser.user.username,
	email: mockUser.user.email,
	password: mockUser.user.password,
};

describe('User slice check', () => {
	describe('Login async flow', () => {
		beforeEach(() => localStorage.clear());
		it('should have a login success flow', async () => {
			const store = storeCreator();
			const storeBeforeLogin = store.getState();
			await store.dispatch(login(loginData));
			const storeAfterLogin = store.getState();

			expect(storeBeforeLogin).toEqual({ user: { ...initialState } });

			expect(storeAfterLogin).toEqual({
				user: {
					...updatedState,
					requestState: 'fulfilled',
				},
			});

			expect(localStorage.getItem('jwt')).toBe(mockUser.jwt);
			expect(localStorage.getItem('username')).toBe(mockUser.user.username);
			expect(localStorage.getItem('email')).toBe(mockUser.user.email);
		});

		it('should have a login failure flow', async () => {
			const store = storeCreator();
			await store.dispatch(login({ ...loginData, password: 'wrongpassword' }));
			const state = store.getState();

			expect(state).toEqual({
				user: {
					...initialState,
					requestState: 'rejected',
					...ValidationError,
				},
			});
		});

		it('should have saved token login flow', async () => {
			localStorage.setItem('jwt', mockUser.jwt);
			const store = storeCreator();
			await store.dispatch(login({}));
			const state = store.getState();

			expect(state).toEqual({
				user: {
					...updatedState,
					requestState: 'fulfilled',
				},
			});
		});
	});

	describe('Logout flow', () => {
		it('should log out successfully', async () => {
			const store = storeCreator();

			// Log in
			await store.dispatch(login(loginData));
			const storeAfterLogin = store.getState();
			expect(storeAfterLogin).toEqual({
				user: {
					...updatedState,
					requestState: 'fulfilled',
				},
			});
			expect(localStorage.getItem('jwt')).toBe(mockUser.jwt);
			expect(localStorage.getItem('username')).toBe(mockUser.user.username);
			expect(localStorage.getItem('email')).toBe(mockUser.user.email);

			// Log out
			await store.dispatch(logout());
			const storeAfterLogout = store.getState();
			expect(storeAfterLogout).toEqual({
				user: { ...initialState },
			});
			expect(localStorage.getItem('jwt')).toBeNull();
			expect(localStorage.getItem('username')).toBeNull();
			expect(localStorage.getItem('email')).toBeNull();
		});
	});

	describe('Registration async flow', () => {
		it('should have a registration failure flow', async () => {
			const store = storeCreator();
			await store.dispatch(
				registration({ email: 'test', username: 'test', password: 'wrong' })
			);
			const state = store.getState();

			expect(state).toEqual({
				user: {
					jwt: '',
					username: '',
					email: '',
					...RegistrationError,
					requestState: 'rejected',
				},
			});

			expect(localStorage.getItem('jwt')).toBeNull();
			expect(localStorage.getItem('username')).toBeNull();
			expect(localStorage.getItem('email')).toBeNull();
		});

		it('should have a registration success flow', async () => {
			const store = storeCreator();
			await store.dispatch(registration(registrationData));
			const state = store.getState();

			expect(state).toEqual({
				user: {
					...updatedState,
					requestState: 'fulfilled',
				},
			});

			expect(localStorage.getItem('jwt')).toBe(mockUser.jwt);
			expect(localStorage.getItem('username')).toBe(mockUser.user.username);
			expect(localStorage.getItem('email')).toBe(mockUser.user.email);
		});
	});
});
