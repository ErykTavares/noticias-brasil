import styled, { css } from 'styled-components';

export const Header = styled.header`
	${({ theme }) => css`
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
		padding: 0 2rem;

		span {
			background-color: ${theme.colors.green};
			padding: 0.2rem;
			border-radius: 0.3rem;
		}
	`}
`;
