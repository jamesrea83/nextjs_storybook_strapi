import { Meta, StoryObj } from '@storybook/react';
import { Icon } from '.';

export default {
	title: 'Content/Icon',
	component: Icon,
} as Meta<typeof Icon>;

type Story = StoryObj<typeof Icon>;

export const BasicIcon: Story = {
	args: {
		name: 'Home',
	},
};
