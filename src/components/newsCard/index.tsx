/* eslint-disable import/no-duplicates */
import React from 'react';
import Image from 'next/image';
import { formatDistance } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import * as S from './style';

interface INewsCard {
	news: DNews.INews;
}

const NewsCard = ({ news }: INewsCard): JSX.Element => {
	const [day, month, year] = news?.date?.split('/');
	const [hour, min, sec] = news?.time?.split(':');
	const date = formatDistance(new Date(+year, +month - 1, +day, +hour, +min, +sec), new Date(), {
		includeSeconds: true,
		addSuffix: true,
		locale: ptBr
	});

	return (
		<S.Wrapper>
			<S.ImgContainer>
				<Image src='https://i.imgur.com/IRwcnQY.png' alt='news thumb' width='100' height='100' />
			</S.ImgContainer>
			<S.ContentWrapper>
				<h4>{news.title}</h4>
				<p>{date}</p>
			</S.ContentWrapper>
		</S.Wrapper>
	);
};
export default NewsCard;
