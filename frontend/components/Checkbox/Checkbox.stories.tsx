import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen, userEvent } from '@storybook/testing-library';
import { Checkbox } from '.';

export default {
	title: 'Controls/Checkbox',
	component: Checkbox,
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
	play: async ({ args }) => {
		await userEvent.click(screen.getByText('✓'));
		await expect(args.onChange).toHaveBeenCalled();
	},
};
