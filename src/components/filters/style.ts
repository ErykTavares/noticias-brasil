import styled from 'styled-components';

export const FiltersContainer = styled.form`
	width: max-content;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: end;
	padding-right: 0.2rem;

	@media screen and (max-width: 1440px) {
		justify-content: start;
	}

	@media screen and (max-width: 882px) {
		width: 100%;
		flex-wrap: wrap;
	}
`;

export const buttonsWrapper = styled.div`
	width: max-content;
	display: flex;
	align-items: center;
	justify-content: start;

	@media screen and (max-width: 882px) {
		width: 100%;
	}
`;

export const InputWrapper = styled.div`
	width: 300px;
	height: 100%;
	display: flex;
	align-items: center;

	@media screen and (max-width: 882px) {
		margin-bottom: 0.5rem;
	}
`;
