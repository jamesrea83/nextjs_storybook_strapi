import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen, userEvent } from '@storybook/testing-library';
import { Switch } from '.';

export default {
	title: 'Controls/Switch',
	component: Switch,
} as Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
	play: async ({ args }) => {
		await userEvent.click(screen.getByTestId('SwitchVisiblePart'));
		await expect(args.onChange).toHaveBeenCalled();
	},
};
