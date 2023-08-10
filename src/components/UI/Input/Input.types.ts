export interface InputProps {
	label?: string;
	placeholder?: string;
	required?: boolean;
	type?: 'text' | 'password' | 'email' | 'number' | 'date';
	icons?: string[] | [];
	readOnly?: boolean;
	// name?: string;
}
