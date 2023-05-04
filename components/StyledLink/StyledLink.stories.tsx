import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen } from '@storybook/testing-library';

import { StyledLink } from './StyledLink';

export default {
	title: 'Content/StyledLink',
	component: StyledLink,
} as Meta<typeof StyledLink>;

type Story = StoryObj<typeof StyledLink>;

export const Primary: Story = {
	play: async ({}) => {
		await expect(screen.getByRole('link')).toBeInTheDocument();
	},
	args: {
		children: 'Styled Link',
		href: 'test-link',
	},
};
