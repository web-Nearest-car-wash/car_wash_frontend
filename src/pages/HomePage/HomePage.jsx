import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './HomePage.module.css';
import api from '../../utils/api';
import {
	selectCardsCarWashes,
	addDataTo,
} from '../../store/cardsCarWashes/cardsCarWashes-slice';
import YMap from '../../components/Map/YMap';
import Search from '../../components/UI/Search/Search';
import CardCardWash from '../../components/CardCarWash/CardCarWash';

function HomePage() {
	const dispatch = useDispatch();
	const { listCarWashes } = useSelector(selectCardsCarWashes);
	const [query, setQuery] = useState('');

	const handleOnChange = (e) => {
		setQuery(e.target.value);
	};

	const clearInput = () => {
		setQuery('');
	};

	useEffect(() => {
		api
			.getListCarWash()
			.then((res) => {
				dispatch(addDataTo(res.results));
			})
			.catch((err) => `Ошибка при получении карточек ${err}`);
	}, [dispatch]);

	return (
		<section className={styles.page}>
			<div className={styles.sidebar}>
				<div className={styles.cardsContainer}>
					{listCarWashes.map((card) => (
						<CardCardWash key={card.id} card={card} />
					))}
				</div>
			</div>
			<div className={styles.map}>
				<Search
					query={query}
					onChange={handleOnChange}
					clearInput={clearInput}
					placeholder="Введите название, адрес или услугу"
				/>
				<YMap />
			</div>
		</section>
	);
}

export default HomePage;
