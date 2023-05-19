import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

interface IDefaultProps {
	children: JSX.Element;
}

const DefaultLayout = ({ children }: IDefaultProps): JSX.Element => (
	<main className={roboto.className}>{children}</main>
);
export default DefaultLayout;
