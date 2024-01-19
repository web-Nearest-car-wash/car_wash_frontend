import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CardCarWash.module.css';
import ReitingStar from '../../assets/ReitingStar.svg';
import ColorLineSubway from '../../assets/ColorLineSubway.svg';
import avatarPlaceholder from '../../assets/avatarPlaceholder.png';
import { BASE_URL } from '../../utils/constants';
import {
	selectCarWashes,
	setCurrentCarWash,
	setCurrentCarWashOnMap,
} from '../../store/carWashes/carWashes-slice';

function CardCarWash({ card }) {
	// function findMinPrice(dataCard) {
	// 	const result = dataCard.services.reduce((accumulator, item) => {
	// 		if (accumulator.price >= item.price) {
	// 			return item;
	// 		}
	// 		return accumulator;
	// 	});
	// 	return result.price;
	// }
	const dispatch = useDispatch();
	const { currentCarWash } = useSelector(selectCarWashes);

	useEffect(() => {
		const current = document.getElementById(currentCarWash.id);
		if (current) current.scrollIntoView({ block: 'start', behavior: 'smooth' });
	}, [currentCarWash]);

	return (
		<div
			className={
				currentCarWash?.id === card.id
					? `${styles.cardWash} ${styles.current}`
					: `${styles.cardWash}`
			}
			onMouseEnter={() => {
				dispatch(setCurrentCarWashOnMap({ id: card.id, name: card.name }));
				dispatch(setCurrentCarWash({}));
			}}
			id={card.id}
		>
			<img
				className={styles.image}
				src={`${BASE_URL}/${card.image.find((img) => img.avatar)?.image}`}
				onError={(e) => {
					e.currentTarget.src = avatarPlaceholder;
				}}
				alt={card.name}
			/>
			<h3 className={styles.title}>
				{card.name ? card.name : 'Автомойка'}
				{card.rating ? (
					<p className={styles.rating}>
						{card.rating}
						<img
							className={styles.ratingIcon}
							src={ReitingStar}
							alt="ReitingStar"
						/>
					</p>
				) : (
					''
				)}
			</h3>
			<p className={styles.subway}>
				<img
					style={{ paddingRight: 4 }}
					src={ColorLineSubway}
					alt="ColorLineSubway"
				/>
				{card.metro.name}
			</p>
			<p className={styles.adress}>{card.contacts.address}</p>
			{/* {Array.isArray(card.services) && card.services.length ? (
				<p className={styles.price}>от {findMinPrice(card)} рублей</p>
			) : (
				''
			)} */}
			{card.open_until ? <p className={styles.open}>{card.open_until}</p> : ''}
		</div>
	);
}

CardCarWash.propTypes = {
	card: PropTypes.shape({
		id: PropTypes.number,
		contacts: PropTypes.shape({
			address: PropTypes.string,
			email: PropTypes.string,
			phone: PropTypes.string,
			website: PropTypes.string,
		}),
		distance: PropTypes.number,
		image: PropTypes.arrayOf(
			PropTypes.shape({
				image: PropTypes.string,
				avatar: PropTypes.bool,
			})
		),
		latitude: PropTypes.string,
		longitude: PropTypes.string,
		metro: PropTypes.shape({
			latitude: PropTypes.number,
			longitude: PropTypes.number,
			name: PropTypes.string,
		}),
		name: PropTypes.string,
		open_until: PropTypes.string,
		rating: PropTypes.string,
	}).isRequired,
};

export default CardCarWash;
