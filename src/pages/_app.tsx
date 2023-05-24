import { GlobalStyle } from '@/style/global';
import theme from '@/style/theme';
import '../style/tailwind.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Component className={roboto.className} {...pageProps} />
		</ThemeProvider>
	);
}
