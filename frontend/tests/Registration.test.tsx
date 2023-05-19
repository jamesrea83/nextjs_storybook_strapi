import { render, screen, act, waitFor } from '@/test-utils';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/router';

import Registration from '@/pages/registration';
import { mockUser } from '@/mocks/user';

jest.mock('next/router', () => ({
	...jest.requireActual('next/router'),
	useRouter: jest.fn(),
}));

describe('Registration page', () => {
	it('should render', () => {
		const { container } = render(<Registration />);
		expect(container).toMatchSnapshot();
	});

	it('should validate input', async () => {
		render(<Registration />);

		const usernameInput = screen.getByRole('textbox', { name: 'Username' });
		const emailInput = screen.getByRole('textbox', { name: 'Email' });
		const passwordInput = screen.getByRole('textbox', { name: 'Password' });
		const submitButton = screen.getByRole('button', { name: 'Sign up' });

		await act(() => userEvent.click(submitButton));

		expect(screen.getAllByText('Required field')).toHaveLength(3);

		await act(() => userEvent.type(usernameInput, 'test'));

		expect(screen.getByText('Min length 6!')).toBeInTheDocument();
		expect(screen.getAllByText('Required field')).toHaveLength(2);

		await act(() => userEvent.type(passwordInput, 'test'));

		expect(screen.getAllByText('Min length 6!')).toHaveLength(2);

		await act(() => userEvent.type(emailInput, 'test'));

		expect(screen.getByText('Invalid email')).toBeInTheDocument();

		await act(() => userEvent.type(usernameInput, 'testtest'));
		await act(() => userEvent.type(passwordInput, 'testtesttest'));
		await act(() => userEvent.type(emailInput, 'test@test.com'));

		expect(screen.queryByText('Min length 6!')).not.toBeInTheDocument();
		expect(screen.queryByText('Invalid email')).not.toBeInTheDocument();
	});

	it('should have server validation', async () => {
		render(<Registration />);

		const usernameInput = screen.getByRole('textbox', {
			name: 'Username',
		});
		const emailInput = screen.getByRole('textbox', { name: 'Email' });
		const passwordInput = screen.getByRole('textbox', {
			name: 'Password',
		});
		const submitButton = screen.getByRole('button', {
			name: 'Sign up',
		});

		await act(() => userEvent.type(usernameInput, 'testtesttest'));
		await act(() => userEvent.type(passwordInput, 'testtesttest'));
		await act(() => userEvent.type(emailInput, 'test@test.com'));
		await act(() => userEvent.click(submitButton));

		expect(
			screen.getByText('An error occurred during account creation')
		).toBeInTheDocument();
	});

	it('should have registration login flow', async () => {
		const push = jest.fn();
		(useRouter as jest.Mock).mockReturnValue({ push });
		render(<Registration />);

		const usernameInput = screen.getByRole('textbox', {
			name: 'Username',
		});
		const emailInput = screen.getByRole('textbox', { name: 'Email' });
		const passwordInput = screen.getByRole('textbox', {
			name: 'Password',
		});
		const submitButton = screen.getByRole('button', {
			name: 'Sign up',
		});

		await act(() => userEvent.type(usernameInput, mockUser.user.username));
		await act(() => userEvent.type(passwordInput, mockUser.user.password));
		await act(() => userEvent.type(emailInput, mockUser.user.email));
		await act(() => userEvent.click(submitButton));

		await waitFor(() => {
			expect(push).toHaveBeenCalledWith('/user');
		});
	});
});
