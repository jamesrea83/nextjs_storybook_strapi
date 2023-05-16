import { Meta, StoryObj } from '@storybook/react';
import { Layout } from '.';

export default {
	title: 'Content/Layout',
	component: Layout,
} as Meta<typeof Layout>;

type Story = StoryObj<typeof Layout>;

const child = (
	<>
		<h1>Main article area</h1>
		<p>
			Lorem ipsum dolor sit amet. Eum quaerat odio cum soluta quas aut sunt
			repellat et aliquid laboriosam. Aut corrupti excepturi est consequatur
			nostrum aut quos facere. Sit nobis voluptatum non veniam fuga est ducimus
			mollitia vel perspiciatis mollitia aut commodi praesentium vel officiis
			repellendus.
		</p>
	</>
);

export const Primary: Story = {
	args: {
		children: child,
	},
};
