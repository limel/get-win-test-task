import { Meta, StoryObj } from '@storybook/react';
import TabsComponent from './Tabs';

const meta: Meta<typeof TabsComponent> = {
	title: 'UI/Tabs',
	component: TabsComponent,
};

export default meta;

type Story = StoryObj<typeof TabsComponent>;

export const Default: Story = {
	args: {
		tabsContent: [
			{
				key: '1',
				label: 'Вход',
				content: 'Content 1',
			},
			{
				key: '2',
				label: 'Регистрация',
				content: 'Content 2',
			},
		],
	},
};
