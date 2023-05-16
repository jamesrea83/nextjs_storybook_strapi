import { reducer, actions, initialState, login } from './userSlice';
import { mockUser } from '@/mocks/user';

const updatedState = {
	jwt: mockUser.jwt,
	username: mockUser.user.username,
	email: mockUser.user.email,
};

const loginData = {
	identifier: mockUser.user.email,
	password: mockUser.user.password,
};

const requestId = 'someId';

describe('User slice check', () => {
	describe('Update state actions', () => {
		it('should update the full state', () => {
			const result = reducer(initialState, actions.update(updatedState));
			expect(result).toEqual(updatedState);
		});

		it('should update only the jwt', () => {
			const result = reducer(
				initialState,
				actions.update({ jwt: updatedState.jwt })
			);
			expect(result).toEqual({
				...initialState,
				jwt: updatedState.jwt,
			});
		});

		it('should clear the state', () => {
			const updatedResult = reducer(initialState, actions.update(updatedState));
			expect(updatedResult).toEqual(updatedState);

			const clearedResult = reducer(initialState, actions.clear());
			expect(clearedResult).toEqual(initialState);
		});
	});

	describe('Login state flow', () => {
		it('should set request state to pending', () => {
			const result = reducer(
				{
					...initialState,
					error: {
						message: 'Rejected',
					},
				},
				login.pending(requestId, loginData)
			);
			expect(result).toEqual({
				...initialState,
				requestState: 'pending',
				error: undefined,
			});
		});

		it('should set request state to fulfilled and reset any previous errors', () => {
			const result = reducer(
				{
					...initialState,
					error: {
						message: 'Rejected',
					},
				},
				login.fulfilled(
					{
						jwt: updatedState.jwt,
						user: {
							username: updatedState.username,
							email: updatedState.email,
						},
					},
					requestId,
					loginData
				)
			);

			expect(result).toEqual({
				...updatedState,
				requestState: 'fulfilled',
				error: undefined,
			});
		});

		it('should set the request state to rejected', () => {
			const payloadError = { error: { name: '500', message: 'Server error' } };
			const result = reducer(
				initialState,
				login.rejected({} as Error, requestId, loginData, payloadError)
			);

			expect(result).toEqual({
				...initialState,
				requestState: 'rejected',
				error: payloadError.error,
			});
		});
	});
});
