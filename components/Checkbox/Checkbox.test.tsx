import { render, screen } from '@/test-utils';
import userEvent from '@testing-library/user-event';

import { Checkbox } from '.';

describe('Checkbox tests', () => {
	it('should render', () => {
		const onChange = jest.fn();
		jest.spyOn(Math, 'random').mockReturnValue(0.999);
		const { asFragment } = render(<Checkbox onChange={onChange} />);

		expect(asFragment()).toMatchSnapshot();
	});

	it('should call onChange on click', async () => {
		const onChange = jest.fn();
		render(<Checkbox onChange={onChange} />);

		const element = screen.getByText('✓');
		await userEvent.click(element);
		expect(onChange).toHaveBeenCalled();
	});
});
