import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: 'Button',
	},
};

// OLD
// const meta: Meta<typeof Button> = {
// 	title: 'Button',
// 	component: Button,
// };

// export default meta;

// type Story = StoryObj<typeof Button>;

// export const Primary: Story = {
// 	args: {
// 		text: 'Primary Button',
// 		color: 'primary',
// 	},
// };

// export const Secondary: Story = {
// 	args: {
// 		text: 'Secondary Button',
// 		color: 'secondary',
// 	},
// };
