import { render, screen, act } from '@/test-utils';
import userEvent from '@testing-library/user-event';

import Login from '@/pages/login';

describe('Login page', () => {
	it('should render', () => {
		const { container } = render(<Login />);
		expect(container).toMatchSnapshot();
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

		await expect(screen.queryByText('Min length 6!')).not.toBeInTheDocument();
	});
});
