import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';

import { store } from '@/store';
import Registration from '@/pages/registration';

const meta: Meta<typeof Registration> = {
	title: 'Pages/Registration',
	component: Registration,
	decorators: [
		Story => (
			<Provider store={store}>
				<Story />
			</Provider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Registration>;

export const Primary: Story = {};
