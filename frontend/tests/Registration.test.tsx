import { render, screen, act } from '@/test-utils';
import userEvent from '@testing-library/user-event';

import Registration from '@/pages/registration';

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
});
