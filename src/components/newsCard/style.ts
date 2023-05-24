import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	max-width: 400px;
	width: 100%;
	height: 330px;
	margin-bottom: 1rem;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		transform: scale(1.1);
		z-index: 1;
	}
`;

export const ImgContainer = styled.div`
	width: 100%;

	img {
		width: 100%;
		border-radius: 0.5rem;
	}
`;

export const ContentWrapper = styled.div`
	${({ theme }) => css`
		width: 100%;
		height: 110px;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;

		h4 {
			display: -webkit-box;
			font-size: 1.5rem;
			font-weight: bold;
			margin-bottom: 0.8rem;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}

		p {
			justify-self: end;
			color: ${theme.colors.lightGray};
		}
	`}
`;
