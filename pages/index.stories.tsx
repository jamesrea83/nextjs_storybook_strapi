import type { Meta, StoryObj } from '@storybook/react';
import Home from './index';

const meta: Meta<typeof Home> = {
	title: 'Pages/Home',
	component: Home,
};

export default meta;

type Story = StoryObj<typeof Home>;

export const Primary: Story = {};

// type Story = StoryObj<typeof Home>;

// export const Basic: Story = {};
// export const HomePage = () => <Home />;
