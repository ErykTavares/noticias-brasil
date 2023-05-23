/* eslint-disable @typescript-eslint/no-unused-vars */
import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
     ${({ theme }) => css`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
					list-style-type: none;
					text-decoration: none;
					scroll-behavior: smooth;
				}

				a,
				a:hover,
				ul,
				li,
				button {
					all: unset;
				}

				main {
					width: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: start;
					background: linear-gradient(
						123deg,
						rgb(205 205 205 / 35%) -0.3%,
						rgb(183 181 181 / 10%) 99.01%
					);
					backdrop-filter: blur(12.5px);
				}

				section {
					max-width: 1366px;
					width: 100%;
					overflow: hidden auto;
				}

				img {
					max-width: 100%;
					height: auto;
				}
			`}
`;
