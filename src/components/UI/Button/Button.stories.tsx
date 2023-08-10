import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
	title: 'UI/Button',
	component: Button,
	argTypes: {
		variant: {
			options: ['primary', 'secondary', 'system'],
			control: {
				type: 'radio',
				labels: {
					primary: 'Primary',
					secondary: 'Secondary',
					system: 'System',
				},
			},
		},
		bgColor: {
			control: 'color',
			presetColors: ['#fff', '#000'],
		},
		bgAccentColor: {
			control: 'color',
			presetColors: ['#fff', '#000'],
		},
		bgActiveColor: {
			control: 'color',
			presetColors: ['#fff', '#000'],
		},
		borderColor: {
			control: 'color',
			presetColors: ['#fff', '#000'],
		},
		borderAccentColor: {
			control: 'color',
			presetColors: ['#fff', '#000'],
		},
		borderActiveColor: {
			control: 'color',
			presetColors: ['#fff', '#000'],
		},
		textColor: {
			control: 'color',
			presetColors: ['#fff', '#000'],
		},
		textAccentColor: {
			control: 'color',
			presetColors: ['#fff', '#000'],
		},
		textActiveColor: {
			control: 'color',
			presetColors: ['#fff', '#000'],
		},
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Label',
		disabled: false,
		pending: false,
		variant: 'primary',
	},
};
