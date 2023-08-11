import { useState, useEffect } from 'react';
import { ButtonProps } from './Button.types';
import Spinner from '../Spinner/Spinner';
import cn from 'classnames';
import s from './Button.module.less';

const Button: React.FC<ButtonProps> = props => {
	const {
		className,
		children,
		title,
		variant,
		type,
		pending,
		borderColor,
		textColor,
		bgColor,
		borderAccentColor,
		textAccentColor,
		bgAccentColor,
		borderActiveColor,
		textActiveColor,
		bgActiveColor,
		disabled,
		handleClick,
	} = props;
	const [clicked, setClicked] = useState(false);
	// const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>(undefined);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout | undefined;

		if (clicked && !pending) {
			timeoutId = setTimeout(() => {
				setClicked(false);
			}, 1000);
		}

		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	}, [clicked, pending]);

	return (
		<button
			className={cn(s.button, className, {
				[s.primary]: variant === 'primary',
				[s.secondary]: variant === 'secondary',
				[s.system]: variant === 'system',
				[s.pending]: pending,
				[s.clicked]: clicked,
			})}
			aria-label={title}
			type={type}
			disabled={disabled}
			title={title}
			onClick={() => {
				handleClick();
				!pending ? setClicked(true) : null;
			}}
			style={
				{
					'--border-color': borderColor,
					'--text-color': textColor,
					'--background-color': bgColor,
					'--border-color-hover': borderAccentColor,
					'--text-color-hover': textAccentColor,
					'--background-color-hover': bgAccentColor,
					'--border-color-active': borderActiveColor,
					'--text-color-active': textActiveColor,
					'--background-color-active': bgActiveColor,
				} as React.CSSProperties
			}>
			{pending && <Spinner className={s.spinner} />}
			{children}
		</button>
	);
};

Button.defaultProps = {
	title: 'Button',
	variant: 'primary',
	type: 'button',
	pending: false,
	disabled: false,
};

export default Button;
