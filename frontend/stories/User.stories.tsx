import type { Meta, StoryObj } from '@storybook/react';
import User from '@/pages/user';

const meta: Meta<typeof User> = {
	title: 'Pages/User',
	component: User,
};

export default meta;

type Story = StoryObj<typeof User>;

export const Primary: Story = {};
