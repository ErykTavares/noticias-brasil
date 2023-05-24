import React from 'react';
import { Roboto } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Head from 'next/head';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

interface IDefaultProps {
	children: JSX.Element;
	title: string;
}

const DefaultLayout = ({ children, title }: IDefaultProps): JSX.Element => (
	<main className={roboto.className}>
		<Head>
			<title>{title}</title>
			<meta property='og:title' content={title} key='title' />
		</Head>
		<Header />
		{children}
		<Footer />
	</main>
);
export default DefaultLayout;
