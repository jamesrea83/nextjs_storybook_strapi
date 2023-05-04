import { render } from '@/test-utils';

import { StyledLink } from './StyledLink';

describe('StyledLink tests', () => {
	it('should render', () => {
		const { asFragment } = render(
			<StyledLink href="test-link">Link Test</StyledLink>
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
