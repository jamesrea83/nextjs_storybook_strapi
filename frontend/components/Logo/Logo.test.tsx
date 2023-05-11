import { render } from '@/test-utils';

import { Logo } from '.';

describe('Logo tests', () => {
	it('should render', () => {
		const { asFragment } = render(<Logo>CoursesBox</Logo>);

		expect(asFragment()).toMatchSnapshot();
	});

	it('should render with custom size', () => {
		const { asFragment } = render(<Logo size={10}>CoursesBox</Logo>);

		expect(asFragment()).toMatchSnapshot();
	});
});
