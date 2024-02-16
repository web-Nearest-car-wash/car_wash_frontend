/* eslint-disable import/no-named-as-default */
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './PopupReviews.module.css';
import RemoveSearch from '../UI/icons/RemoveSearch';
import StarRating from '../StarRating/StarRating';

function PopupReviews({ isOpen, closeModal }) {
	useEffect(() => {
		const closePopupHandler = (e) => {
			if (e.target.classList.contains(styles.opened)) {
				closeModal();
			}
		};

		document.addEventListener('click', closePopupHandler);
		return () => {
			document.removeEventListener('click', closePopupHandler);
		};
	}, [closeModal]);

	return (
		<div className={isOpen ? `${styles.popup} ${styles.opened}` : styles.popup}>
			<div className={styles.container}>
				<button
					className={styles.close}
					aria-label="Кнопка закрытия попапа"
					onClick={closeModal}
				>
					<RemoveSearch />
				</button>
				<div className={styles.text}>
					<h2 className={styles.title}>
						Пользовались услугами этой автомойки?
					</h2>
					<p className={styles.description}>
						Проставьте рейтинг, эта информация поможет остальным пользователям.
					</p>
				</div>
				<StarRating
					numTotalStars={5}
					initialRating={0}
					closePopup={closeModal}
				/>
			</div>
		</div>
	);
}

PopupReviews.propTypes = {
	isOpen: PropTypes.bool,
	closeModal: PropTypes.func,
};

export default PopupReviews;
