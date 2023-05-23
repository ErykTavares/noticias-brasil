import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: start;
	padding: 1.2rem 2rem;

	@media (max-width: 768px) {
		padding: 1.2rem 1rem;
	}

	h2 {
		width: 100%;
		font-size: 2.25rem;
		font-weight: bold;
		align-self: start;
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minMax(400px, auto));
	place-items: start;
	gap: 1rem;

	@media screen and (max-width: 465px) {
		grid-template-columns: 1fr;
	}
`;
