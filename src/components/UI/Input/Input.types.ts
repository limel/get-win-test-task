export interface InputProps {
	label?: string;
	placeholder?: string;
	required?: boolean;
	type?: 'text' | 'password' | 'email' | 'number' | 'date';
	icons?: string[] | [];
	readOnly?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	// name?: string;
}
