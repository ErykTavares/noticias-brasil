import React from 'react';
import * as S from './style';

const Footer = (): JSX.Element => (
	<S.Footer>
		<a href='https://eryktavares-portfolio.netlify.app/home' target='_blank' rel='noreferrer'>
			<h6>Copyright © {new Date().getFullYear()} - ErykTavares</h6>
		</a>
	</S.Footer>
);
export default Footer;
