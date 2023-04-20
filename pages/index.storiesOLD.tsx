import type { Meta, Story } from '@storybook/react';
import Home from './index';
import styles from '@/styles/Home.module.css';

export default {
	title: 'Pages/Home',
	component: Home,
} as Meta;

export const Primary: Story = args => <Home {...args} />;

// type Story = StoryObj<typeof Home>;

// export const Basic: Story = {};
// export const HomePage = () => <Home />;
