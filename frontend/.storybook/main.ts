import type { StorybookConfig } from '@storybook/nextjs';
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import path from 'path';
const previewAnnotations: StorybookConfig = {
	stories: [
		'../stories/**/*.mdx',
		'../stories/**/*.stories.@(js|jsx|ts|tsx)',
		'../components/**/*.mdx',
		'../components/**/*.stories.@(js|jsx|ts|tsx)',
	],
	staticDirs: ['../public'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		'@storybook/addon-docs',
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
		autodocs: true,
	},
	webpackFinal: async config => {
		config.resolve = {
			...config?.resolve,
			alias: {
				...config?.resolve?.alias,
				'@': path.resolve(__dirname, '../'),
			},
			plugins: [
				...(config?.resolve?.plugins || []),
				new TsconfigPathsPlugin({
					extensions: config?.resolve?.extensions,
				}),
			],
		};
		return config;
	},
};
export default previewAnnotations;
