import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
	stories: [
		'../pages/**/*.mdx',
		'../pages/**/*.stories.@(js|jsx|ts|tsx)',
		'../components/**/*.mdx',
		'../components/**/*.stories.@(js|jsx|ts|tsx)',
	],
	staticDirs: ['../public'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-styling',
		'storybook-css-modules',
		'@etchteam/storybook-addon-css-variables-theme',
	],
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: prop =>
				prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
		},
	},
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async config => {
		config.resolve = {
			...config?.resolve,
			alias: {
				...config?.resolve?.alias,
				'@': path.resolve(__dirname, '../'),
			},
		};
		return config;
	},
};
export default config;
