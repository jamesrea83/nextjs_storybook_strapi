import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen, userEvent } from '@storybook/testing-library';
import { Layout } from '.';

export default {
	title: 'Content/Layout',
	component: Layout,
} as Meta<typeof Layout>;

type Story = StoryObj<typeof Layout>;

export const Primary: Story = {
	args: {
		children: 'Main Page',
	},
};
