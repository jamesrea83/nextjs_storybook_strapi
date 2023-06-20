import { Meta, StoryObj } from '@storybook/react';
import { expect, jest } from '@storybook/jest';
import { ModuleButton, PrimaryModuleButton } from './ModuleButton';
import { screen, userEvent } from '@storybook/testing-library';
import styles from './ModuleButton.module.css';

export default {
	title: 'Controls/ModuleButton',
	component: ModuleButton,
	args: {
		children: 'Button',
		onClick: jest.fn(),
	},
} as Meta<typeof ModuleButton>;

type DefaultStory = StoryObj<typeof ModuleButton>;
type PrimaryStory = StoryObj<typeof PrimaryModuleButton>;

export const Default: DefaultStory = {};

export const Primary: PrimaryStory = {
	args: {
		style: styles.primary,
	},
};
