import type { Preview } from '@storybook/react';
import { ThemeProvider, Global } from '@emotion/react';
import { Themes } from '../styles/themes';
import { GlobalStyles } from '../styles/globals';
import React from 'react';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	backgrounds: {
		default: 'dark',
		defaultColor: '#5e5c64',
		values: [
			{ name: 'dark', value: '#5e5c64' },
			{ name: 'light', value: '#e4ebf5' },
		],
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

const withThemeProvider = (Story, context) => {
	const background =
		context.globals.backgrounds?.value || parameters.backgrounds.defaultColor;

	const theme =
		Object.values(Themes).find(theme => theme.background === background) || {};

	return (
		<ThemeProvider theme={theme}>
			<Story {...context} />
		</ThemeProvider>
	);
};

const withGlobalStyles = (Story, context) => (
	<>
		<Global styles={GlobalStyles} />
		<Story {...context} />
	</>
);

export const decorators = [withThemeProvider, withGlobalStyles];

// const preview: Preview = {
// 	decorators: [withThemeProvider],
// 	parameters,
// };

// export default preview;
