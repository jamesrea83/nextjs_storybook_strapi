import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';

import { store } from '@/store';
import Login from '@/pages/login';

const meta: Meta<typeof Login> = {
	title: 'Pages/Login',
	component: Login,
	decorators: [
		Story => (
			<Provider store={store}>
				<Story />
			</Provider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Login>;

export const Primary: Story = {};
