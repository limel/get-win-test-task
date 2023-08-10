import { useEffect, useState } from 'react';
import { Form } from 'antd';
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
	const values = Form.useWatch([], form);

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
				/>
			</Form.Item>
			<Button
				className={s.submitButton}
				disabled={!isFormValid}
				type="submit">
				Зарегистрироваться
			</Button>
			<SocialEnter />
		</Form>
	);
};

export default RegistrationForm;
