import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';

import { Themes } from '@/styles/themes';
import { Layout } from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
	const [isDark, setIsDark] = useState(false);
	const toggleDark = () => setIsDark(!isDark);

	useEffect(
		() => setIsDark(window.matchMedia('prefers-color-scheme: dark').matches),
		[]
	);

	const theme = Themes[isDark ? 'dark' : 'light'];
	return (
		<ThemeProvider theme={theme}>
			<Layout onThemeToggle={toggleDark} isDark={isDark}>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
