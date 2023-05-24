import React, { ChangeEventHandler } from 'react';
import Select from 'react-select';
import { RefCallBack } from 'react-hook-form';
import * as S from './style';

export type Options = { value: number | string; label: string | number };

interface ISelectProps {
	onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
	errors?: any;
	onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
	name: string;
	value: any;
	label?: string;
	optionLabel: string;
	options: Options[];
	defaultValue?: string | number;
	className?: string;
}

const ReactSelect = React.forwardRef(
	(
		{
			className,
			onChange,
			errors,
			onBlur,
			name,
			options,
			optionLabel,
			label,
			defaultValue,
			value
		}: ISelectProps,
		ref: React.LegacyRef<HTMLSelectElement>
	) => {
		const inputId = `select-${name}`;

		return (
			<S.Wrapper className={className || ''}>
				{label ? <label htmlFor={inputId}>{label}</label> : null}

				<div className='w-full'>
					<Select
						options={options}
						placeholder={optionLabel}
						onChange={onChange}
						onBlur={onBlur}
						value={value.label ? value : ''}
						name={name}
						id={name}
						instanceId={name}
						defaultValue={defaultValue}
						ref={(fieldRef) => {
							const refCallback = ref as RefCallBack;

							if (!fieldRef) {
								return;
							}

							refCallback({
								focus: fieldRef?.onInputFocus
							});
						}}
						inputId={inputId}
					/>
				</div>

				{(errors?.[name] || errors?.label || errors) && (
					<span className='badge bg-danger px-2  my-2'>
						{(errors[name] || errors?.label || errors).message}
					</span>
				)}
			</S.Wrapper>
		);
	}
);

export default ReactSelect;
