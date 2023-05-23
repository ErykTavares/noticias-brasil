import React from 'react';
import Link from 'next/link';
import * as S from './style';

const Header = (): JSX.Element => (
	<S.Header>
		<h1>
			<Link href='/'>
				<span>Notícias</span> Brasil
			</Link>
		</h1>
	</S.Header>
);
export default Header;
