import styled, { css } from 'styled-components';

export const Header = styled.header`
	${({ theme }) => css`
		max-width: 1366px;
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
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
