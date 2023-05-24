import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		media: {
			mobileS: string;
			mobileM: string;
			mobileL: string;
			tablet: string;
			laptop: string;
		};
		colors: {
			dark: string;
			red: string;
			darkBlue: string;
			lightGray: string;
			green: string;
			lightWhite: string;
		};
		boxShadow: string;
	}
}
