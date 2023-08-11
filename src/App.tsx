import NoticeInfo from 'components/NoticeInfo';
import TabsComponent from 'components/UI/Tabs';
import RegistrationForm from 'components/RegistrationForm';

const tabs = [
	{
		key: '1',
		label: 'Вход',
		content: 'форма входа',
	},
	{
		key: '2',
		label: 'Регистрация',
		content: <RegistrationForm />,
	},
];

function App() {
	return (
		<main className="App">
			<NoticeInfo />
			<TabsComponent tabsContent={tabs} />
		</main>
	);
}

export default App;
