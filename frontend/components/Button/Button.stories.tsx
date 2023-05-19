import { Meta, StoryObj } from '@storybook/react';
import { expect, jest } from '@storybook/jest';
import { Button } from '.';
import { screen, userEvent } from '@storybook/testing-library';

export default {
	title: 'Controls/Button',
	component: Button,
	args: {
		children: 'Button',
		onClick: jest.fn(),
	},
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	play: async ({ args }) => {
		await userEvent.click(screen.getByRole('button'));
		await expect(args.onClick).toHaveBeenCalled();
	},
	args: {
		color: 'primary',
	},
};

export const Secondary: Story = {
	...Primary,
	args: {
		color: 'secondary',
	},
};

export const Warning: Story = {
	...Primary,
	args: {
		color: 'warning',
	},
};

export const Danger: Story = {
	...Primary,
	args: {
		color: 'danger',
	},
};
