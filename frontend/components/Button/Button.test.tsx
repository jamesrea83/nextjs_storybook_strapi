import { render, screen } from '@/test-utils';
import userEvent from '@testing-library/user-event';
import { Props } from './Button';
import { Button } from '.';

describe('Button tests', () => {
	it('should render', () => {
		const buttonProps: Props = {
			children: 'Test Button',
			color: 'primary',
			onClick: jest.fn(),
		};
		const { asFragment } = render(<Button {...buttonProps} />);

		expect(asFragment()).toMatchSnapshot();
	});

	it('should call onClick on click', async () => {
		const buttonProps: Props = {
			children: 'Test Button',
			color: 'primary',
			onClick: jest.fn(),
		};

		render(<Button {...buttonProps} />);

		const element = screen.getByRole('button');
		await userEvent.click(element);

		expect(buttonProps.onClick).toHaveBeenCalled();
	});
});
