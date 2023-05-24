import React, { ChangeEventHandler, FocusEventHandler } from 'react';
import { InputWrapperStyle } from './styled';

interface IInputProps {
	type:
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week';
	className?: string;
	label?: string;
	placeholder?: string;
	autoComplete?: string;
	onChange: ChangeEventHandler<HTMLInputElement> | undefined;
	errors?: any;
	onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
	value?: any;
	name: string;
	accept?: string;
	multiple?: boolean;
	pattern?: string;
	defaultValue?: string | number | string[] | undefined;
	min?: number | string;
	max?: number | string;
}

const Input = React.forwardRef(
	(
		{
			className,
			type,
			label,
			placeholder,
			autoComplete,
			onChange,
			errors,
			onBlur,
			name,
			accept,
			multiple,
			pattern,
			defaultValue,
			value,
			min,
			max
		}: IInputProps,
		ref: React.LegacyRef<HTMLInputElement>
	) => (
		<InputWrapperStyle className={className || ''}>
			{label ? <label htmlFor={name}>{label}</label> : null}
			<div className='w-full'>
				<input
					type={type}
					autoComplete={autoComplete}
					placeholder={placeholder}
					defaultValue={defaultValue}
					accept={accept}
					multiple={multiple}
					pattern={pattern}
					max={max}
					min={min}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
					ref={ref}
				/>
				{errors?.[name] || errors ? (
					<span className='badge bg-danger px-2  my-2'>{(errors[name] || errors).message}</span>
				) : null}
			</div>
		</InputWrapperStyle>
	)
);

export default Input;
