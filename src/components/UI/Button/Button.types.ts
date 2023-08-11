export interface ButtonProps {
	children?: React.ReactNode;
	className?: string;
	title?: string;
	variant?: 'primary' | 'secondary' | 'system';
	type?: 'button' | 'submit' | 'reset';
	pending?: boolean;
	disabled?: boolean;
	borderColor?: string;
	textColor?: string;
	bgColor?: string;
	bgAccentColor?: string;
	borderAccentColor?: string;
	textAccentColor?: string;
	bgActiveColor?: string;
	borderActiveColor?: string;
	textActiveColor?: string;
	handleClick?: () => void;
}
