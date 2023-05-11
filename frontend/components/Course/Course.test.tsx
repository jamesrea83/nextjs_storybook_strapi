import { render } from '@/test-utils';

import { Course } from './Course';

describe('Course tests', () => {
	const child = (
		<>
			orem ipsum dolor sit amet. Eum quaerat odio cum soluta quas aut sunt
			repellat et aliquid laboriosam. Aut corrupti excepturi est consequatur
			nostrum aut quos facere. Sit nobis voluptatum non veniam fuga est ducimus
			mollitia vel perspiciatis mollitia aut commodi praesentium vel officiis
			repellendus.
		</>
	);

	it('should render', () => {
		const { asFragment } = render(
			<Course
				header="This is a header"
				link="test-link"
				imageProps={{
					width: 1368,
					height: 770,
					alt: 'Logo',
					src: '/hands-on_reactjs_cover.png',
				}}
			>
				{child}
			</Course>
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
