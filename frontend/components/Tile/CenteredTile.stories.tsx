import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen } from '@storybook/testing-library';
import { CenteredTile } from './CenteredTile';

export default {
	title: 'Content/Tile',
	component: CenteredTile,
} as Meta<typeof CenteredTile>;

type Story = StoryObj<typeof CenteredTile>;

export const BasicCenteredTile: Story = {
	play: async ({ args }) => {
		await expect(screen.getByRole('heading')).toBeInTheDocument();
	},
	args: {
		header: 'Lorem ipsum dolor sit amet',
		children: `sed do eiusmod tempor incididunt `,
	},
};
