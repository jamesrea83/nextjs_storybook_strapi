import { render, screen } from '@/test-utils';
import userEvent from '@testing-library/user-event';

import { IconButton } from '.';

describe('Checkbox tests', () => {
	it('should render', () => {
		const onClick = jest.fn();
		const { asFragment } = render(
			<IconButton onClick={onClick} name="Home">
				Button
			</IconButton>
		);

		expect(asFragment()).toMatchSnapshot();
	});

	it('should call onClick on click', async () => {
		const onClick = jest.fn();
		render(
			<IconButton onClick={onClick} name="Home">
				Button
			</IconButton>
		);

		const element = screen.getByRole('button');
		await userEvent.click(element);
		expect(onClick).toHaveBeenCalled();
	});
});
