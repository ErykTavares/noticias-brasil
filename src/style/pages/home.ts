import styled from 'styled-components';

export const Container = styled.section`
	min-height: 500px;
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;
	padding: 1.2rem 2rem;

	@media (max-width: 768px) {
		padding: 1.2rem 1rem;
	}

	h3 {
		font-size: 1.3rem;
		place-self: center;
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minMax(380px, 420px));
	place-items: start;
	gap: 1.3rem;

	@media screen and (max-width: 924px) {
		grid-template-columns: 1fr;
		place-items: center;
		margin-top: 0.5rem;
	}
`;

export const Header = styled.header`
	width: 100%;
	height: 54px;
	display: flex;
	align-items: start;
	justify-content: space-between;
	padding-right: 1rem;
	margin-bottom: 1.5rem;

	h2 {
		font-size: 2.25rem;
		font-weight: bold;
		align-self: start;
	}

	@media screen and (max-width: 1440px) {
		height: max-content;
		flex-direction: column;
		align-items: start;
		justify-content: start;
	}
`;
