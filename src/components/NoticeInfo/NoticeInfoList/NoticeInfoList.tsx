import { Row, Col } from "antd";
import sprite from "assets/icons/sprite.svg";
import s from "./NoticeInfoList.module.less";

const list = [
	"Автоматизация HR",
	"Интеграция с job-порталами",
	"Оценка персонала",
	"Синхронизация с Outlook",
	"Безопасность данных",
	"Парсинг резюме",
	"Мультиязычность",
	"Конструктор отчетности",
];

const NoticeInfoList = () => {
	return (
		<Row gutter={[24, 24]} className={s.list}>
			{list.map((text, index) => (
				<Col className={s.item} key={index} lg={12} sm={24}>
					<svg className={s.icon}>
						<use href={`${sprite}#check`} />
					</svg>
					{text}
				</Col>
			))}
		</Row>
	);
};

export default NoticeInfoList;
