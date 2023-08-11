import { useEffect, useState, ChangeEvent } from 'react';
import { Form } from 'antd';
import md5 from 'crypto-js/md5';
import { setEmail, setPassword } from 'redux/user/userSlice';
// import { registrationRequest } from 'redux/registration/registrationSlice';
import { useAppDispatch } from 'hooks/redux';
import Input from 'components/UI/Input/Input';
import Button from 'components/UI/Button/Button';
import SocialEnter from 'components/SocialEnter';
import s from './RegistrationForm.module.less';

interface FieldType {
	email?: string;
	password?: string;
	passwordRepeat?: string;
}

const RegistrationForm: React.FC = () => {
	const [form] = Form.useForm();
	const [isFormValid, setIsFormValid] = useState(false);
	const [passwordLocal, setPasswordLocal] = useState('');
	const values = Form.useWatch([], form);
	const dispatch = useAppDispatch();

	function handleSubmit() {
		console.log('handleSubmit');
		dispatch({ type: 'registration/registrationPost' });
	}

	useEffect(() => {
		form.validateFields({ validateOnly: true }).then(
			() => {
				setIsFormValid(true);
			},
			() => {
				setIsFormValid(false);
			}
		);
	}, [values]);

	return (
		<>
			<Form
				form={form}
				name="registartion"
				autoComplete="off"
				className={s.form}>
				<Form.Item<FieldType>
					name="email"
					rules={[{ required: true, message: 'Это поле не может быть пустым!' }]}>
					<Input
						label="E-mail"
						placeholder="Адрес эл. почты"
						onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setEmail(e.target.value))}
					/>
				</Form.Item>
				<Form.Item<FieldType>
					name="password"
					rules={[{ required: true, message: 'Это поле не может быть пустым!' }]}>
					<Input
						label="Придумайте пароль"
						type="password"
						icons={['key', 'eye']}
						placeholder="Укажите ваш пароль"
						onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordLocal(e.target.value)}
					/>
				</Form.Item>
				<Form.Item<FieldType>
					name="passwordRepeat"
					rules={[{ required: true, message: 'Это поле не может быть пустым!' }]}>
					<Input
						label="Повторите пароль"
						type="password"
						icons={['eye']}
						placeholder="Повторите ваш пароль"
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							console.log(passwordLocal, e.target.value);
							if (passwordLocal === e.target.value) {
								setIsFormValid(true);
								dispatch(setPassword(md5(e.target.value).toString()));
							}
						}}
					/>
				</Form.Item>
				<Button
					className={s.submitButton}
					disabled={!isFormValid}
					// pending={loading}
					handleClick={handleSubmit}
					type="submit">
					Зарегистрироваться
				</Button>
				<SocialEnter />
			</Form>
		</>
	);
};

export default RegistrationForm;
