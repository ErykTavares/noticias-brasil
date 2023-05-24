import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Head from 'next/head';

interface IDefaultProps {
	children: JSX.Element;
	title: string;
}

const DefaultLayout = ({ children, title }: IDefaultProps): JSX.Element => (
	<>
		<Head>
			<title>{title}</title>
			<meta property='og:title' content={title} key='title' />
			<meta
				name='description'
				content='Gostaria de compartilhar com você uma empolgante oportunidade de posição em potencial. Fui desafiado a criar um site de notícias com integração de API, bem como elaborar uma lista e página de notícias. Estou entusiasmado em demonstrar minha criatividade e habilidades técnicas, e criar uma solução de qualidade que atenda às expectativas do negócio.'
			/>
		</Head>

		<Header />
		<main>{children}</main>
		<Footer />
	</>
);
export default DefaultLayout;
