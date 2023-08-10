import { Typography } from "antd";
import NoticeInfoList from "components/NoticeInfo/NoticeInfoList";
import sprite from "assets/icons/sprite.svg";
const { Title, Paragraph } = Typography;
import s from "./NoticeInfo.module.less";

const NoticeInfo = () => {
	return (
		<aside className={s.container}>
			<Title className={s.title}>Войти в аккаунт</Title>
			<Paragraph className={s.subtitle}>
				Введите ваш E-mail и пароль, чтобы начать использовать все преимущества платформы:
			</Paragraph>
			<NoticeInfoList />
			<svg className={s.illustration}>
				<use href={`${sprite}#work`} />
			</svg>
		</aside>
	);
};

export default NoticeInfo;
