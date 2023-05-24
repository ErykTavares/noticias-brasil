import Input from '@/components/form/input';
import Select from '@/components/form/select/select';
import NewsCard from '@/components/newsCard';
import DefaultLayout from '@/layout/defaultLayout';
import * as S from '@/style/pages/home';
import addTimeInDate from '@/util/addTimeInDate';
import axios from 'axios';
import dateFormat from 'dateformat';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';

interface IHomeProps {
	data: DNews.INews[];
}

const states = [
	{ value: 'AC', label: 'Acre' },
	{ value: 'AL', label: 'Alagoas' },
	{ value: 'AP', label: 'Amapá' },
	{ value: 'AM', label: 'Amazonas' },
	{ value: 'BA', label: 'Bahia' },
	{ value: 'CE', label: 'Ceará' },
	{ value: 'DF', label: 'Distrito Federal' },
	{ value: 'ES', label: 'Espirito Santo' },
	{ value: 'GO', label: 'Goiás' },
	{ value: 'MA', label: 'Maranhão' },
	{ value: 'MS', label: 'Mato Grosso do Sul' },
	{ value: 'MT', label: 'Mato Grosso' },
	{ value: 'MG', label: 'Minas Gerais' },
	{ value: 'PA', label: 'Pará' },
	{ value: 'PB', label: 'Paraíba' },
	{ value: 'PR', label: 'Paraná' },
	{ value: 'PE', label: 'Pernambuco' },
	{ value: 'PI', label: 'Piauí' },
	{ value: 'RJ', label: 'Rio de Janeiro' },
	{ value: 'RN', label: 'Rio Grande do Norte' },
	{ value: 'RS', label: 'Rio Grande do Sul' },
	{ value: 'RO', label: 'Rondônia' },
	{ value: 'RR', label: 'Roraima' },
	{ value: 'SC', label: 'Santa Catarina' },
	{ value: 'SP', label: 'São Paulo' },
	{ value: 'SE', label: 'Sergipe' },
	{ value: 'TO', label: 'Tocantins' }
];

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
	const { date, state } = watch();

	const handleFilter = useCallback(() => {
		router.push(`${router.pathname}?state=${state.value.toLowerCase()}&date=${date}`);
	}, [date, state]);

	const handleCleanFilter = () => {
		reset();
		router.push(router.pathname);
	};

	return (
		<DefaultLayout>
			<S.Container>
				<S.Header>
					<h2>Últimas Notícias</h2>
					<S.FiltersContainer>
						<S.InputWrapper>
							<Controller
								render={({
									field: { onChange, ref, onBlur, value, name: fieldName },
									fieldState: { error }
								}) => (
									<Select
										className='mr-2'
										options={states}
										name={fieldName}
										optionLabel='-- Selecione o Estado --'
										onChange={onChange}
										onBlur={onBlur}
										value={value}
										ref={ref}
										errors={error}
									/>
								)}
								control={control}
								name='state'
							/>
						</S.InputWrapper>
						<S.InputWrapper>
							<Controller
								render={({ field: { name, onChange, value, ref }, fieldState: { error } }) => (
									<Input
										className='mr-2'
										type='date'
										placeholder='00/00/000'
										errors={error}
										name={name}
										onChange={onChange}
										value={value}
										ref={ref}
									/>
								)}
								name='date'
								control={control}
							/>
						</S.InputWrapper>
						<S.buttonsWrapper>
							<button
								type='button'
								className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded'
								onClick={handleFilter}
								disabled={!date || !state.label}
							>
								Filtrar
							</button>
							<button
								type='button'
								className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
								onClick={handleCleanFilter}
								disabled={!date || !state.label}
							>
								Limpar Filtros
							</button>
						</S.buttonsWrapper>
					</S.FiltersContainer>
				</S.Header>

				<S.Wrapper>
					{data?.length ? (
						data?.map((item) => <NewsCard key={item.id + item.datetime} news={item} />)
					) : (
						<h3>Nenhum resultado encontrado.</h3>
					)}
				</S.Wrapper>
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
