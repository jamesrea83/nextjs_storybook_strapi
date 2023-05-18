import { render, screen, waitFor } from '@/test-utils';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { Layout } from './Layout';

describe('Layout tests', () => {
	localStorage.setItem('theme', 'light');
	const child = (
		<>
			<h1>Main article area</h1>
			<p>
				orem ipsum dolor sit amet. Eum quaerat odio cum soluta quas aut sunt
				repellat et aliquid laboriosam. Aut corrupti excepturi est consequatur
				nostrum aut quos facere. Sit nobis voluptatum non veniam fuga est
				ducimus mollitia vel perspiciatis mollitia aut commodi praesentium vel
				officiis repellendus.
			</p>
		</>
	);

	it('should render', async () => {
		const { asFragment } = render(<Layout>{child}</Layout>);

		await waitFor(() => {
			expect(asFragment()).toMatchSnapshot();
		});
	});

	it('should toggle theme', async () => {
		(window.matchMedia as jest.Mock).mockReturnValue({ matches: true });

		render(<Layout>{child}</Layout>);

		const themeToggler = screen.getByRole('button', { name: 'Sun' });
		await waitFor(() => {
			expect(themeToggler).toBeInTheDocument();
		});

		await act(() => userEvent.click(themeToggler));

		await waitFor(() => {
			expect(screen.getByRole('button', { name: 'Moon' })).toBeInTheDocument();
		});
	});
});
