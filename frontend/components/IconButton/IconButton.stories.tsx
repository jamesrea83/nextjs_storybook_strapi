import { Meta, StoryObj } from '@storybook/react';
import { expect, jest } from '@storybook/jest';
import { screen, userEvent } from '@storybook/testing-library';
import { IconButton } from '.';

export default {
	title: 'Controls/IconButton',
	component: IconButton,
	args: {
		onClick: jest.fn(),
	},
} as Meta<typeof IconButton>;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
	play: async ({ args }) => {
		await userEvent.click(screen.getByRole('button'));
		await expect(args.onClick).toHaveBeenCalled();
	},
	args: {
		name: 'Home',
	},
};
