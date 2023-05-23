import React from 'react';
import { Roboto } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

interface IDefaultProps {
	children: JSX.Element;
}

const DefaultLayout = ({ children }: IDefaultProps): JSX.Element => (
	<main className={roboto.className}>
		<Header />
		{children}
		<Footer />
	</main>
);
export default DefaultLayout;
