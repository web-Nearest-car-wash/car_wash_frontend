import { useSelector } from 'react-redux';
import styles from './HeaderCarWash.module.css';
import { selectcarWashesCard } from '../../store/cardCarWashes/cardCarWashes-slice';
import { BASE_URL, POPUP_TEXT } from '../../utils/constants';
import carWashLogoDefault from '../../assets/carWashLogoDefault.jpg';

function HeaderCarWash() {
	// идея рефакторинга: разнести по разным компонентам состояние с галереей и без

	const { carWashesCard } = useSelector(selectcarWashesCard);
	const imageSource =
		carWashesCard.image?.length > 0
			? `${BASE_URL}/${
					carWashesCard.image.find((image) => image.avatar === true).image
			  }`
			: carWashLogoDefault;
	const hasMultipleImages = carWashesCard.image?.length > 1; // из-за отображения галлереи меняется структура шапки

	return (
		<div
			className={`${styles.container} ${
				hasMultipleImages ? styles.column : ''
			}`}
		>
			{hasMultipleImages ? (
				// вариант шапки с галереей
				<>
					<div className={styles.about}>
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
							<p className={styles.hours}>
								{carWashesCard.schedule.open_until_list}
							</p>
						) : (
							''
						)}
					</div>
					<div className={styles.gallery}>
						<img
							src={imageSource}
							alt={`Автомойка ${carWashesCard.name}`}
							className={styles.logo}
						/>

						{carWashesCard.image.map((imageObject, index) => {
							if (index === 1 || index === 2) {
								return (
									<img
										src={`${BASE_URL}/${imageObject.image}`}
										alt={`Автомойка ${carWashesCard.name}`}
										className={styles.galleryImage}
									/>
								);
							}
							if (index === 3) {
								return (
									<div className={styles.doubleImageContainer}>
										<img
											src={`${BASE_URL}/${imageObject.image}`}
											alt={`Автомойка ${carWashesCard.name}`}
											className={styles.doubleImages}
										/>
										{carWashesCard.image[4] && (
											<img
												src={`${BASE_URL}/${carWashesCard.image[4].image}`}
												alt={`Автомойка ${carWashesCard.name}`}
												className={styles.doubleImages}
											/>
										)}
									</div>
								);
							}
							return null;
						})}
					</div>
				</>
			) : (
				// вариант без галереи
				<>
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
						<p className={styles.hours}>
							{carWashesCard.schedule.open_until_list}
						</p>
					) : (
						''
					)}
				</>
			)}
		</div>
	);
}

export default HeaderCarWash;
