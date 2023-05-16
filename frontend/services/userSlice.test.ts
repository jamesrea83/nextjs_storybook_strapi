import { reducer, actions, initialState } from './userSlice';
import { mockUser } from '@/mocks/user';

const updatedState = {
	jwt: mockUser.jwt,
	username: mockUser.user.username,
	email: mockUser.user.email,
};

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
});
