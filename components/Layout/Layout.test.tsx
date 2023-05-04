import { render } from '@/test-utils';

import { Layout } from './Layout';

describe('Layout tests', () => {
	const child = (
		<>
			<h1>Main article area</h1>
			<p>
				orem ipsum dolor sit amet. Eum quaerat odio cum soluta quas aut sunt
				repellat et aliquid laboriosam. Aut corrupti excepturi est consequatur
				nostrum aut quos facere. Sit nobis voluptatum non veniam fuga est
				ducimus mollitia vel perspiciatis mollitia aut commodi praesentium vel
				officiis repellendus.
			</p>
		</>
	);

	it('should render', () => {
		const { asFragment } = render(
			<Layout isDark onThemeToggle={() => undefined}>
				{child}
			</Layout>
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
