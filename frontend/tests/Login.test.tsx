import { pageRender as render, screen, act, waitFor } from '@/test-utils';
import userEvent from '@testing-library/user-event';

import Login from '@/pages/login';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('Login page', () => {
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
});
