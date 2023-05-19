import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import User from '@/pages/user';
import { rootReducer } from '@/store';
import { mockUser } from '@/mocks/user';

const store = configureStore({
	reducer: rootReducer,
	preloadedState: {
		user: {
			jwt: mockUser.jwt,
			username: mockUser.user.username,
			email: mockUser.user.email,
		},
	},
});

const meta: Meta<typeof User> = {
	title: 'Pages/User',
	component: User,
	decorators: [
		Story => (
			<Provider store={store}>
				<Story />
			</Provider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof User>;

export const Primary: Story = {};
