import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen, userEvent } from '@storybook/testing-library';
import { Logo } from '.';

export default {
	title: 'Content/Logo',
	component: Logo,
} as Meta<typeof Logo>;

type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
	play: async ({ args }) => {
		await expect(screen.getByRole('banner')).toBeInTheDocument();
	},
	args: {
		children: 'CoursesBox',
	},
};
