import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import YMap from '../../components/Map/YMap';
import FilterButton from '../../components/UI/FilterButton/FilterButton';
import Search from '../../components/UI/Search/Search';
import CardCarWash from '../../components/CardCarWash/CardCarWash';
import PopupWithFilters from '../../components/PopupWithFilters/PopupWithFilters';
import { selectCarWashes } from '../../store/carWashes/carWashes-slice';
import { handleOpen } from '../../store/filters/filters-slice';
import Loader from '../../components/UI/Loader/Loader';

function HomePage() {
	console.log(process.env);
	const { listCarWashes, loading } = useSelector(selectCarWashes);
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();

	const handleOnChange = (value) => {
		setQuery(value);
	};

	const clearInput = () => {
		setQuery('');
	};

	return (
		<section className={styles.page}>
			<div className={styles.sidebar}>
				<div className={styles.cardsContainer}>
					{loading ? (
						<Loader />
					) : (
						listCarWashes.map((card) => (
							<Link key={card.id} to={`/carwashes/${card.id}`}>
								<CardCarWash card={card} />
							</Link>
						))
					)}
				</div>
			</div>
			<div className={styles.map}>
				<div className={styles.filters}>
					<FilterButton onClick={() => dispatch(handleOpen(true))} />
					<Search
						query={query}
						onChange={handleOnChange}
						clearInput={clearInput}
						placeholder="Введите название, адрес или услугу"
					/>
				</div>
				<YMap />
			</div>
			<PopupWithFilters />
		</section>
	);
}

export default HomePage;
