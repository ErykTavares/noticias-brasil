import styled, { css } from 'styled-components';

export const Header = styled.header`
	${({ theme }) => css`
		position: sticky;
		top: 0;
		width: 100%;
		background-color: ${theme.colors.lightWhite};
		z-index: 1000;
	`}
`;

export const HeaderWrapper = styled.div`
	${({ theme }) => css`
		max-width: 1366px;
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
		margin: 0 auto;
		padding: 0 2rem;

		@media (max-width: 768px) {
			padding: 0 1rem;
		}

		h1 {
			font-size: 2.5rem;
			cursor: pointer;

			span {
				background-color: ${theme.colors.green};
				padding: 0.2rem;
				border-radius: 0.3rem;
			}
		}
	`}
`;
