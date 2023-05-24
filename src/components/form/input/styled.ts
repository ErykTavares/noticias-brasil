import styled from 'styled-components';

export const InputWrapperStyle = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: start;
	justify-content: start;
	margin-left: 0 !important;

	input {
		width: 100%;
		padding: 0.5rem;
		height: 38px;
		border: 1px solid hsl(0, 0%, 80%);
		border-radius: 0.25rem;
		outline: none;
		transition: all 0.2s;

		&:hover,
		&:focus {
			border: 2px solid rgb(38, 132, 255);
		}
	}
`;
