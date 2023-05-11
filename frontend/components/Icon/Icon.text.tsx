import { render } from '@/test-utils';
import { Icon } from '.';

describe('Icon tests', () => {
	it('should render an icon', () => {
		const { asFragment } = render(<Icon name="Moon" />);
		expect(asFragment()).toMatchSnapshot();
	});
});
