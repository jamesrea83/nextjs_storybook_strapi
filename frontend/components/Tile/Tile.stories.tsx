import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen } from '@storybook/testing-library';
import { Tile } from '.';

export default {
	title: 'Content/Tile',
	component: Tile,
} as Meta<typeof Tile>;

type Story = StoryObj<typeof Tile>;

export const BasicTile: Story = {
	play: async ({ args }) => {
		await expect(screen.getByRole('heading')).toBeInTheDocument();
	},
	args: {
		header: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		children: `sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
	},
};
