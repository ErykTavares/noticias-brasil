import Filters from '@/components/filters';
import NewsCard from '@/components/newsCard';
import DefaultLayout from '@/layout/defaultLayout';
import * as S from '@/style/pages/home';
import addTimeInDate from '@/util/addTimeInDate';
import states from '@/util/states';
import axios from 'axios';
import dateFormat from 'dateformat';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

interface IHomeProps {
	data: DNews.INews[];
}

const Home = ({ data }: IHomeProps): JSX.Element => {
	const router = useRouter();

	const { control, watch, reset } = useForm({
		defaultValues: {
			state: states.find((fin) => {
				const queryState = router?.query?.state as string;
				return queryState?.toLowerCase() === fin.value.toLowerCase() ? fin : undefined;
			}) || { label: '', value: '' },

			date: router?.query?.date
				? dateFormat(addTimeInDate(router?.query?.date as string), 'isoDate')
				: ''
		}
	});

	return (
		<DefaultLayout title='Notícias Brasil'>
			<S.Container>
				<S.Header>
					<h2>Últimas Notícias</h2>
					<Filters control={control} watch={watch} reset={reset} />
				</S.Header>

				{data?.length ? (
					<S.Wrapper>
						{data?.map((item) => (
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	const thumbLinks = [
		'https://i.imgur.com/5yUAwYK.png',
		'https://i.imgur.com/B1daKmc.png',
		'https://i.imgur.com/wDvxJtg.png'
	];
	const currentDate = dateFormat(new Date(), 'dd/mm/yyyy');
	const queryDate = query?.date
		? dateFormat(addTimeInDate(query?.date as string), 'dd/mm/yyyy')
		: '';

	console.log(queryDate);

	const data = await axios(`https://apinoticias.tedk.com.br/api/`, {
		params: {
			q: query?.state || 'bahia',
			date: queryDate || currentDate
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
