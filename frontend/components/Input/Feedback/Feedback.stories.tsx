import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen } from '@storybook/testing-library';
import { Feedback } from '.';

export default {
	title: 'Controls/Feedback',
	component: Feedback,
} as Meta<typeof Feedback>;

type Story = StoryObj<typeof Feedback>;

export const Valid: Story = {
	play: async () => {
		await expect(screen.getByText('Looks good!')).toBeInTheDocument();
	},
	args: {
		children: 'Looks good!',
		isValid: true,
	},
};

export const Invalid: Story = {
	play: async () => {
		await expect(
			screen.getByText('Please provide a valid value')
		).toBeInTheDocument();
	},
	args: {
		children: 'Please provide a valid value',
		isValid: false,
	},
};
