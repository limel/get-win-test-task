import sprite from 'assets/icons/sprite.svg';
import s from './SocialEnter.module.less';

const SocialEnter: React.FC = () => {
	return (
		<div className={s.container}>
			<span className={s.divider}>Или войдите с помощью</span>
			<ul className={s.enterList}>
				<li
					className={s.item}
					title="google">
					<svg className={s.icon}>
						<use href={`${sprite}#google`} />
					</svg>
				</li>
				<li
					className={s.item}
					title="facebook">
					<svg className={s.icon}>
						<use href={`${sprite}#facebook`} />
					</svg>
				</li>
				<li
					className={s.item}
					title="linkedin">
					<svg className={s.icon}>
						<use href={`${sprite}#linkedin`} />
					</svg>
				</li>
			</ul>
		</div>
	);
};

export default SocialEnter;
