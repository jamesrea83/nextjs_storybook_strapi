import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen, userEvent } from '@storybook/testing-library';
import { Input } from '.';
import { Feedback } from './Feedback';

export default {
	title: 'Controls/Input',
	component: Input,
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
	play: async ({ args }) => {
		await userEvent.type(screen.getByRole('textbox'), 'String');
		await expect(args.onChange).toHaveBeenCalledTimes(6);
	},
	args: {
		placeholder: 'Your name',
		label: 'Name',
	},
	argTypes: {
		feedback: {
			control: false,
		},
	},
};

export const WithIcon: Story = {
	args: {
		placeholder: 'Your name',
		height: 4,
		icon: 'Search',
	},
};

export const WithValidFeedback: Story = {
	args: {
		placeholder: 'Your name',
		label: 'Name',
		feedback: <Feedback isValid={true}>Looks good!</Feedback>,
	},
	argTypes: {
		feedback: {
			control: false,
		},
	},
};

export const WithInvalidFeedback: Story = {
	args: {
		placeholder: 'Your name',
		feedback: <Feedback isValid={false}>Required!</Feedback>,
	},
	argTypes: {
		feedback: {
			control: false,
		},
	},
};
