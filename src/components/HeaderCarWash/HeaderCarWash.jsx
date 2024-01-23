import { useSelector } from 'react-redux';
import styles from './HeaderCarWash.module.css';
import { selectcarWashesCard } from '../../store/cardCarWashes/cardCarWashes-slice';
import { BASE_URL, POPUP_TEXT } from '../../utils/constants';
import carWashLogoDefault from '../../assets/carWashLogoDefault.jpg';

function HeaderCarWash() {
	const { carWashesCard } = useSelector(selectcarWashesCard);
	const imageSource =
		carWashesCard.image > 0
			? `${BASE_URL}/${carWashesCard.image[0]}`
			: carWashLogoDefault;

	return (
		<div className={styles.container}>
			<img
				src={imageSource}
				alt={`Автомойка ${carWashesCard.name}`}
				className={styles.logo}
			/>
			<div className={styles.info}>
				<h1 className={styles.title}>{carWashesCard.name}</h1>
				<div className={styles.rating}>
					<p className={styles.ratingCount}>
						{carWashesCard.rating || 'Без оценок'}
					</p>
					<div className={styles.ratingStar} />
				</div>
				<div className={styles.popup}>
					<div className={styles.popupText}>{POPUP_TEXT}</div>
				</div>
			</div>
			{carWashesCard.schedule?.open_until_list ? (
				<p className={styles.hours}>{carWashesCard.schedule.open_until_list}</p>
			) : (
				''
			)}
		</div>
	);
}

export default HeaderCarWash;
