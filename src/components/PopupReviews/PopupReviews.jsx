/* eslint-disable import/no-named-as-default */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './PopupReviews.module.css';
import { closePopup } from '../../store/popupReviews/actions';
import RemoveSearch from '../UI/icons/RemoveSearch';
import StarRating from '../StarRating/StarRating';

function PopupReviews() {
	const dispatch = useDispatch();
	const isOpen = useSelector((state) => state.popupReviews.isOpen);

	useEffect(() => {
		const closePopupHandler = (e) => {
			if (e.target.classList.contains(styles.opened)) {
				dispatch(closePopup());
			}
		};

		document.addEventListener('click', closePopupHandler);
		return () => {
			document.removeEventListener('click', closePopupHandler);
		};
	}, [dispatch]);

	return (
		<div className={isOpen ? `${styles.popup} ${styles.opened}` : styles.popup}>
			<div className={styles.container}>
				<button
					className={styles.close}
					aria-label="Кнопка закрытия попапа"
					onClick={() => dispatch(closePopup())}
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
					closePopup={closePopup}
				/>
			</div>
		</div>
	);
}

export default PopupReviews;
