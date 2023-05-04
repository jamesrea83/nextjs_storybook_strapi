import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen, userEvent } from '@storybook/testing-library';

import { Course } from './Course';

export default {
	title: 'Content/Course',
	component: Course,
} as Meta<typeof Course>;

type Story = StoryObj<typeof Course>;

export const Primary: Story = {
	play: async ({}) => {
		await expect(screen.getByRole('heading')).toBeInTheDocument();
		await expect(screen.getByRole('img')).toBeInTheDocument();
		await expect(screen.getByRole('link')).toBeInTheDocument();
	},
	args: {
		header: 'This is a header',
		link: 'some-page',
		imageProps: {
			width: 1368,
			height: 770,
			alt: 'Logo',
			src: '/hands-on_reactjs_cover.png',
		},
		children: (
			<>
				Lorem ipsum dolor sit amet. Eum quaerat odio cum soluta quas aut sunt
				repellat et aliquid laboriosam. Aut corrupti excepturi est consequatur
				nostrum aut quos facere. Sit nobis voluptatum non veniam fuga est
				ducimus mollitia vel perspiciatis mollitia aut commodi praesentium vel
				officiis repellendus.
				<ul>
					<li>Point 1</li>
					<li>Point 2</li>
					<li>Point 3</li>
				</ul>
			</>
		),
	},
	argTypes: {
		children: {
			control: false,
		},
	},
};
