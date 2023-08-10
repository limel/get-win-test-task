import s from './Spinner.module.less';
import cn from 'classnames';
import sprite from 'assets/icons/sprite.svg';

const Spinner = ({ className }: { className: string }) => {
	return (
		<span className={cn(s.spinner, className)}>
			<svg>
				<use href={`${sprite}#spinner`} />
			</svg>
		</span>
	);
};
export default Spinner;
