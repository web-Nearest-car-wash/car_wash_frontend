import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './HomePage.module.css';
import YMap from '../../components/Map/YMap';
import FilterButton from '../../components/UI/FilterButton/FilterButton';
import Search from '../../components/UI/Search/Search';
import CardCarWash from '../../components/CardCarWash/CardCarWash';
import PopupWithFilters from '../../components/PopupWithFilters/PopupWithFilters';
import {
	fetchListCarWash,
	selectCarWashes,
} from '../../store/carWashes/carWashes-slice';
import { handleOpen } from '../../store/filters/filters-slice';

function HomePage() {
	const dispatch = useDispatch();
	const { listCarWashes, loading } = useSelector(selectCarWashes);
	const [query, setQuery] = useState('');

	const handleOnChange = (e) => {
		setQuery(e.target.value);
	};

	const clearInput = () => {
		setQuery('');
	};

	useEffect(() => {
		dispatch(fetchListCarWash());
	}, [dispatch]);

	return (
		<section className={styles.page}>
			<div className={styles.sidebar}>
				<div className={styles.cardsContainer}>
					{loading ? (
						<p>Loading...</p>
					) : (
						listCarWashes.map((card) => (
							<CardCarWash key={card.id} card={card} />
						))
					)}
				</div>
			</div>
			<div className={styles.map}>
				<FilterButton onClick={() => dispatch(handleOpen(true))} />
				<Search
					query={query}
					onChange={handleOnChange}
					clearInput={clearInput}
					placeholder="Введите название, адрес или услугу"
				/>
				<YMap />
			</div>
			<PopupWithFilters />
		</section>
	);
}

export default HomePage;
