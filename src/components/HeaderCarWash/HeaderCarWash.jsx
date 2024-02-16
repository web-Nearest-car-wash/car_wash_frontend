/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import avatarPlaceholder from '../../assets/avatarPlaceholder.png';
import { POPUP_TEXT } from '../../utils/constants';
import PopupReviews from '../PopupReviews/PopupReviews';
import styles from './HeaderCarWash.module.css';
import useModal from '../../hooks/useModal';

const { REACT_APP_BASE_URL } = process.env;

function HeaderCarWash({ image, name, rating, schedule }) {
	// идея рефакторинга: разнести по разным компонентам состояние с галереей и без

	const { isOpen, openModal, closeModal } = useModal();

	const imageSource = `${REACT_APP_BASE_URL}/${
		image?.find((currentImage) => currentImage.avatar === true)?.image
	}`;
	const hasMultipleImages = image?.length > 1; // из-за отображения галлереи меняется структура шапки

	return (
		<div
			className={`${styles.container} ${
				hasMultipleImages ? styles.column : ''
			}`}
		>
			{hasMultipleImages ? (
				// вариант шапки с галереей
				<>
					{/* Попап для оценки */}
					{isOpen && <PopupReviews isOpen={isOpen} closeModal={closeModal} />}

					<div className={styles.about}>
						<div className={styles.info}>
							<h1 className={styles.title}>{name}</h1>
							<div className={styles.rating} onClick={openModal}>
								<p className={styles.ratingCount}>{rating || 'Без оценок'}</p>
								<div className={styles.ratingStar} />
							</div>
							<div className={styles.popup}>
								<div className={styles.popupText}>{POPUP_TEXT}</div>
							</div>
						</div>
						{schedule?.open_until_list ? (
							<p className={styles.hours}>{schedule.open_until_list}</p>
						) : (
							''
						)}
					</div>
					<div className={styles.gallery}>
						<img
							src={imageSource}
							onError={(e) => {
								e.currentTarget.src = avatarPlaceholder;
							}}
							alt={`Автомойка ${name}`}
							className={styles.logo}
						/>

						{image.map((imageObject, index) => {
							if (index === 1 || index === 2) {
								return (
									<img
										key={imageObject.image}
										src={`${REACT_APP_BASE_URL}/${imageObject.image}`}
										alt={`Автомойка ${name}`}
										className={styles.galleryImage}
									/>
								);
							}
							if (index === 3) {
								return (
									<div className={styles.doubleImageContainer}>
										<img
											src={`${REACT_APP_BASE_URL}/${imageObject.image}`}
											alt={`Автомойка ${name}`}
											className={styles.doubleImages}
										/>
										{image[4] && (
											<img
												src={`${REACT_APP_BASE_URL}/${image[4].image}`}
												alt={`Автомойка ${name}`}
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
						alt={`Автомойка ${name}`}
						className={styles.logo}
						onError={(e) => {
							e.currentTarget.src = avatarPlaceholder;
						}}
					/>
					<div className={styles.info}>
						<h1 className={styles.title}>{name}</h1>

						<div className={styles.rating}>
							<p className={styles.ratingCount}>{rating || 'Без оценок'}</p>
							<div className={styles.ratingStar} />
						</div>

						<div className={styles.popup}>
							<div className={styles.popupText}>{POPUP_TEXT}</div>
						</div>
					</div>
					{schedule?.open_until_list ? (
						<p className={styles.hours}>{schedule.open_until_list}</p>
					) : (
						''
					)}
				</>
			)}
		</div>
	);
}

HeaderCarWash.propTypes = {
	image: PropTypes.arrayOf(
		PropTypes.shape({
			avatar: PropTypes.bool,
			image: PropTypes.string.isRequired,
		})
	),
	name: PropTypes.string,
	rating: PropTypes.number,
	schedule: PropTypes.shape({
		open_until_list: PropTypes.string,
	}),
};

export default HeaderCarWash;
