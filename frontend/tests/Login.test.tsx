import { pageRender as render, screen, act, waitFor } from '@/test-utils';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/router';

import Login from '@/pages/login';
import { mockUser } from '@/mocks/user';

jest.mock('next/router', () => ({
	...jest.requireActual('next/router'),
	useRouter: jest.fn(),
}));

describe('Login page', () => {
	beforeEach(() => localStorage.clear());
	it('should render', async () => {
		const { container } = render(<Login />);
		await waitFor(() => expect(container).toMatchSnapshot());
	});

	it('should validate input', async () => {
		render(<Login />);

		const identifierInput = screen.getByRole('textbox', { name: 'Identifier' });
		const passwordInput = screen.getByRole('textbox', { name: 'Password' });
		const submitButton = screen.getByRole('button', { name: 'Sign in' });

		await act(() => userEvent.click(submitButton));

		expect(screen.getAllByText('Required field')).toHaveLength(2);

		await act(() => userEvent.type(identifierInput, 'test'));

		expect(screen.getByText('Min length 6!')).toBeInTheDocument();
		expect(screen.getByText('Required field')).toBeInTheDocument();

		await act(() => userEvent.type(passwordInput, 'test'));

		expect(screen.getAllByText('Min length 6!')).toHaveLength(2);
		expect(screen.queryByText('Required field')).not.toBeInTheDocument();

		await act(() => userEvent.type(identifierInput, 'test@test.com'));
		await act(() => userEvent.type(passwordInput, 'testtesttest'));

		expect(screen.queryByText('Min length 6!')).not.toBeInTheDocument();
	});

	it('should have server validation', async () => {
		render(<Login />);

		const identifierInput = screen.getByRole('textbox', { name: 'Identifier' });
		const passwordInput = screen.getByRole('textbox', { name: 'Password' });
		const submitButton = screen.getByRole('button', { name: 'Sign in' });

		await act(() => userEvent.type(identifierInput, 'test@test.test'));
		await act(() => userEvent.type(passwordInput, 'testtesttest'));
		await act(() => userEvent.click(submitButton));

		expect(
			screen.getByText('Invalid identifier or password')
		).toBeInTheDocument();
	});

	it('should have successful login flow', async () => {
		const push = jest.fn();
		(useRouter as jest.Mock).mockReturnValue({ push });
		render(<Login />);

		const identifierInput = screen.getByRole('textbox', {
			name: 'Identifier',
		});
		const passwordInput = screen.getByRole('textbox', {
			name: 'Password',
		});
		const submitButton = screen.getByRole('button', {
			name: 'Sign in',
		});

		await act(() => userEvent.type(identifierInput, mockUser.user.email));
		await act(() => userEvent.type(passwordInput, mockUser.user.password));
		await act(() => userEvent.click(submitButton));

		expect(push).toHaveBeenCalledWith('/user');
	});
});
