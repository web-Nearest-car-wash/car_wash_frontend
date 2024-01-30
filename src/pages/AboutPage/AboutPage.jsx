import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchCarWashCard,
	selectcarWashesCard,
} from '../../store/cardCarWashes/cardCarWashes-slice';
import HeaderCarWash from '../../components/HeaderCarWash/HeaderCarWash';
import Price from '../../components/Price/Price';
import TheAdvancedSection from '../../components/TheAdvancedSection/TheAdvancedSection';
import AddressCarWash from '../../components/AddressCarWash/AddressCarWash';
import Loader from '../../components/UI/Loader/Loader';
import styles from './AboutPage.module.css';

function AboutPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCarWashCard(id));
	}, [dispatch, id]);
	const { carWashesCard, loading } = useSelector(selectcarWashesCard);
	const coords = {
		latitude: Number(carWashesCard.latitude),
		longitude: Number(carWashesCard.longitude),
	};

	return (
		<section className={styles.page}>
			{loading ? (
				<Loader />
			) : (
				<>
					<HeaderCarWash
						image={carWashesCard.image}
						name={carWashesCard.name}
						rating={carWashesCard.rating}
						schedule={carWashesCard.schedule}
					/>
					<div className={styles.wrapper}>
						<div className={styles.main}>
							{carWashesCard.services?.length > 0 && (
								<Price cardsService={carWashesCard.services} />
							)}
							<TheAdvancedSection
								payment={carWashesCard.payment}
								promotions={carWashesCard.promotions}
								restRoom={carWashesCard.rest_room}
							/>
						</div>
						<div className={styles.sidebar}>
							{carWashesCard.contacts && (
								<AddressCarWash
									coords={coords}
									address={carWashesCard.contacts.address}
									metro={carWashesCard.metro.name}
								/>
							)}
						</div>
					</div>
				</>
			)}
		</section>
	);
}

export default AboutPage;
