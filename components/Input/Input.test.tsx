import { ChangeEventHandler } from 'react';
import { render, screen } from '@/test-utils';
import userEvent from '@testing-library/user-event';

import { Input } from '.';

describe('Input tests', () => {
	it('should render', () => {
		const onChange = jest.fn();
		jest.spyOn(Math, 'random').mockReturnValue(0.999);
		const { asFragment } = render(
			<Input
				onChange={onChange as unknown as ChangeEventHandler<HTMLInputElement>}
				label="Label"
				placeholder="Placeholder"
			/>
		);

		expect(asFragment()).toMatchSnapshot();
	});

	it('should render with icon', () => {
		const onChange = jest.fn();
		jest.spyOn(Math, 'random').mockReturnValue(0.999);
		const { asFragment } = render(
			<Input
				onChange={onChange as unknown as ChangeEventHandler<HTMLInputElement>}
				label="Label"
				placeholder="Placeholder"
				icon="Search"
			/>
		);

		expect(asFragment()).toMatchSnapshot();
	});

	it('should call onChange on input', async () => {
		const onChange = jest.fn();
		render(
			<Input
				onChange={onChange as unknown as ChangeEventHandler<HTMLInputElement>}
				label="Label"
				placeholder="Placeholder"
			/>
		);

		const element = screen.getByRole('textbox');
		await userEvent.type(element, 'String');
		expect(onChange).toHaveBeenCalledTimes(6);
	});
});
