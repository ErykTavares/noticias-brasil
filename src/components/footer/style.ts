import styled, { css } from 'styled-components';

export const Footer = styled.footer`
	${({ theme }) => css`
		width: 100%;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		align-self: end;
		justify-self: end;

		a {
			h6 {
				font-weight: bold;
				cursor: pointer;
				transition: all 0.3s;

				&:hover,
				&:focus {
					color: ${theme.colors.green};
				}
			}
		}
	`}
`;
