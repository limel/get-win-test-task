import { Meta, StoryObj } from '@storybook/react';
import InputField from './Input';

const icons = ['eye', 'eye-visible', 'key'];

const meta: Meta<typeof InputField> = {
	title: 'UI/Input',
	component: InputField,
	argTypes: {
		icons: {
			options: icons,
			control: {
				type: 'check',
				labels: icons.map(icon => {
					return {
						title: icon,
						value: icon,
					};
				}, {}),
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
	args: {
		label: 'Label',
		placeholder: 'Placeholder',
		required: true,
		icons: icons,
		readOnly: false,
	},
};
