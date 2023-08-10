import { useState } from 'react';
import { Input } from 'antd';
import { InputProps } from './Input.types';
import cn from 'classnames';
import sprite from 'assets/icons/sprite.svg';
import s from './Input.module.less';

const InputField: React.FC<InputProps> = props => {
	const { required, label, placeholder, icons, readOnly, type, ...inputProps } = props;
	const [passwordVisible, setPasswordVisible] = useState(false);

	const IconComponent = (iconTitle: string) => (
		<svg
			key={iconTitle}
			onClick={() => {
				if (iconTitle === 'eye' || iconTitle === 'eye-visible') {
					setPasswordVisible(!passwordVisible);
				}
			}}
			className={cn(s.icon, {
				[s.key]: iconTitle === 'key',
			})}>
			<use href={`${sprite}#${iconTitle}`} />
		</svg>
	);

	return (
		<label className={s.inputContainer}>
			<span data-end={required ? '*' : null}>{label}</span>
			<Input
				className={cn(s.input, {
					[s.readOnly]: readOnly,
				})}
				size="large"
				readOnly={readOnly}
				placeholder={placeholder}
				type={passwordVisible ? 'text' : type}
				suffix={
					icons &&
					icons.map(iconTitle => {
						if (iconTitle === 'eye' && passwordVisible) {
							iconTitle = 'eye-visible';
						}
						return IconComponent(iconTitle);
					})
				}
				{...inputProps}
			/>
		</label>
	);
};

InputField.defaultProps = {
	label: 'Label',
	placeholder: 'Placeholder',
	type: 'text',
	required: false,
	icons: [],
	readOnly: false,
};

export default InputField;
