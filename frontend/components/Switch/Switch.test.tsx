import { render, screen } from '@/test-utils';
import userEvent from '@testing-library/user-event';

import { Switch } from '.';

describe('Switch tests', () => {
	it('should render', () => {
		const onChange = jest.fn();
		jest.spyOn(Math, 'random').mockReturnValue(0.999);
		const { asFragment } = render(<Switch onChange={onChange} />);

		expect(asFragment()).toMatchSnapshot();
	});

	it('should call onChange on click', async () => {
		const onChange = jest.fn();
		render(<Switch onChange={onChange} />);

		const element = screen.getByTestId('SwitchVisiblePart');
		await userEvent.click(element);
		expect(onChange).toHaveBeenCalled();
	});
});
