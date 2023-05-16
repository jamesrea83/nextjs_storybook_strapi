import type { Meta, StoryObj } from '@storybook/react';
import Registration from '@/pages/registration';

const meta: Meta<typeof Registration> = {
	title: 'Pages/Registration',
	component: Registration,
};

export default meta;

type Story = StoryObj<typeof Registration>;

export const Primary: Story = {};
