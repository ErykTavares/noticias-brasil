import NewsCard from '@/components/newsCard';
import DefaultLayout from '@/layout/defaultLayout';
import * as S from '@/style/pages/home';
import axios from 'axios';
import dateFormat from 'dateformat';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

interface IHomeProps {
	data: DNews.INews[];
}

const Home = ({ data }: IHomeProps): JSX.Element => {
	const router = useRouter();
	console.log(data);

	return (
		<DefaultLayout>
			<S.Container>
				<h2>Últimas Notícias</h2>
				{/* <button
					type='button'
					onClick={() => {
						router.push(`${router.pathname}?state=saoPaulo`);
					}}
				>
					change filters
				</button> */}
				<S.Wrapper>
					{data.map((item) => (
						<NewsCard news={item} />
					))}
				</S.Wrapper>
			</S.Container>
		</DefaultLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	console.log(query);
	const currentDate = dateFormat(new Date(), 'dd/mm/yyyy');
	const data = await axios(
		`https://apinoticias.tedk.com.br/api/?q=${query?.state || 'bahia'}&date=${currentDate}`
	).then((response) => response.data.list);

	return { props: { data } };
};
export default Home;
