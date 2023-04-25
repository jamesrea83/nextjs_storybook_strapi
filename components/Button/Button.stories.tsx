import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { Button } from './Button';
import { screen, userEvent } from '@storybook/testing-library';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
	args: {
		children: 'Button',
	},
};

export default meta;

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
