import { initialState, login } from './userSlice';
import { mockUser, ValidationError } from '@/mocks/user';
import { storeCreator } from '@/store';

const updatedState = {
	jwt: mockUser.jwt,
	username: mockUser.user.username,
	email: mockUser.user.email,
};

const loginData = {
	identifier: mockUser.user.email,
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
});
