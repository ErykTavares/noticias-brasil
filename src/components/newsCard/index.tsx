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
			<a href={news.link} target='_blank' rel='noreferrer'>
				<S.ImgContainer>
					<Image src={news.thumb} alt='news thumb' width='400' height='225' priority />
				</S.ImgContainer>
				<S.ContentWrapper>
					<h4>{news.title}</h4>
					<p>{date}</p>
				</S.ContentWrapper>
			</a>
		</S.Wrapper>
	);
};
export default NewsCard;
