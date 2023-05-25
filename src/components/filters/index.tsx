import React from 'react';
import { Control, Controller, UseFormWatch } from 'react-hook-form';
import states from '@/util/states';
import * as S from './style';
import Select from '../form/select/select';
import Input from '../form/input';

interface IValues {
	state: { label: string; value: string };
	date: string;
}
interface IFiltersProps {
	handleFilterNews: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
	handleCleanFilter: () => void;
	watch: UseFormWatch<IValues>;
	control: Control<IValues, any>;
}

const Filters = ({
	handleFilterNews,
	handleCleanFilter,
	watch,
	control
}: IFiltersProps): JSX.Element => {
	const { date, state } = watch();

	return (
		<S.FiltersContainer onSubmit={handleFilterNews}>
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
					type='submit'
					className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded'
					disabled={!date || !state.label}
				>
					Filtrar
				</button>
				<button
					type='reset'
					className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
					onClick={handleCleanFilter}
					disabled={!date || !state.label}
				>
					Limpar Filtros
				</button>
			</S.buttonsWrapper>
		</S.FiltersContainer>
	);
};
export default Filters;
