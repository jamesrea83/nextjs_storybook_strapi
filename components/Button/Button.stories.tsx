import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

export default {
	title: 'Custom/Button',
	component: Button,
} as Meta;

export const Primary: StoryFn = args => <Button {...args} />;
Primary.args = {
	label: 'Custom/Button',
	primary: true,
};
