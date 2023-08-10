import { Meta, StoryObj } from '@storybook/react';
import RegistrationForm from './RegistrationForm';

const meta: Meta<typeof RegistrationForm> = {
	title: 'UI/RegistrationForm',
	component: RegistrationForm,
};

export default meta;

type Story = StoryObj<typeof RegistrationForm>;

export const Default: Story = {
	args: {},
};
