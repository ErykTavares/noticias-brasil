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
	const { date, time, thumb, title, link } = news;
	const [day, month, year] = date?.split('/');
	const [hour, min, sec] = time?.split(':');
	const formattedDate = formatDistance(
		new Date(+year, +month - 1, +day, +hour, +min, +sec),
		new Date(),
		{
			includeSeconds: true,
			addSuffix: true,
			locale: ptBr
		}
	);

	return (
		<S.Wrapper>
			<a href={link} target='_blank' rel='noreferrer'>
				<S.ImgContainer>
					<Image src={thumb} alt='news thumb' width='400' height='225' priority />
				</S.ImgContainer>
				<S.ContentWrapper>
					<h4>{title}</h4>
					<p>{formattedDate}</p>
				</S.ContentWrapper>
			</a>
		</S.Wrapper>
	);
};
export default NewsCard;
