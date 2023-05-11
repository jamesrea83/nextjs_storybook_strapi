import { render } from '@/test-utils';

import { Feedback } from '.';

describe('Feedback tests', () => {
	it('should render valid result', () => {
		const { asFragment } = render(<Feedback isValid>Good</Feedback>);

		expect(asFragment()).toMatchSnapshot();
	});

	it('should render invalid result', () => {
		const { asFragment } = render(<Feedback isValid={false}>Bad</Feedback>);

		expect(asFragment()).toMatchSnapshot();
	});
});
