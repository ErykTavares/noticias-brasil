import Filters from '@/components/filters';
import NewsCard from '@/components/newsCard';
import DefaultLayout from '@/layout/defaultLayout';
import api from '@/services/api';
import * as S from '@/style/pages/home';
import addTimeInDate from '@/util/addTimeInDate';
import dateFormat from 'dateformat';
import { GetServerSideProps } from 'next';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

interface IHomeProps {
	data: DNews.INews[];
}

const thumbLinks = [
	'https://i.imgur.com/5yUAwYK.png',
	'https://i.imgur.com/B1daKmc.png',
	'https://i.imgur.com/wDvxJtg.png'
];

const Home = ({ data }: IHomeProps): JSX.Element => {
	const [news, setNews] = useState<DNews.INews[]>(data);

	const { control, watch, reset } = useForm({
		defaultValues: {
			state: { label: '', value: '' },
			date: ''
		}
	});
	const { date, state } = watch();

	const handleFilterNews = useCallback(
		async (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			const queryDate = dateFormat(addTimeInDate(date), 'dd/mm/yyyy');

			await api
				.get(``, {
					params: {
						q: state?.value?.toLowerCase(),
						date: queryDate
					}
				})
				.then((response) => {
					const res = response?.data?.list?.map((item: DNews.INews, index: any) => ({
						...item,
						id: index,
						thumb: thumbLinks[Math.floor(Math.random() * thumbLinks.length)]
					}));

					setNews(res);
				})
				.catch((err) => {
					console.error(err);
				});
		},
		[date, state]
	);

	const handleCleanFilter = () => {
		reset({ date: '', state: {} });
		setNews(data);
	};

	return (
		<DefaultLayout title='Notícias Brasil'>
			<S.Container>
				<S.Header>
					<h2>Últimas Notícias</h2>
					<Filters
						control={control}
						watch={watch}
						handleFilterNews={handleFilterNews}
						handleCleanFilter={handleCleanFilter}
					/>
				</S.Header>

				{news?.length ? (
					<S.Wrapper>
						{news?.map((item) => (
							<NewsCard key={item.id + item.datetime} news={item} />
						))}
					</S.Wrapper>
				) : (
					<h3>Nenhum resultado encontrado.</h3>
				)}
			</S.Container>
		</DefaultLayout>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	const currentDate = dateFormat(new Date(), 'dd/mm/yyyy');

	const data = await api(``, {
		params: {
			q: 'bahia',
			date: currentDate
		}
	}).then((response) => {
		const res = response?.data?.list?.map((item: DNews.INews, index: any) => ({
			...item,
			id: index,
			thumb: thumbLinks[Math.floor(Math.random() * thumbLinks.length)]
		}));
		return res;
	});

	return { props: { data } };
};
