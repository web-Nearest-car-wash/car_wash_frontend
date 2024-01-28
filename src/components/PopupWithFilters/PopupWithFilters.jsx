import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './PopupWithFilters.module.css';
import FilterWithCheckbox from '../UI/FilterWithCheckbox/FilterWithCheckbox';
import FilterWithServices from '../UI/FilterWithServices/FilterWithServices';
import {
	fetchListServices,
	fetchListTypes,
	selectFilters,
} from '../../store/filters/filters-slice';
import { fetchListFilteredCarWashes } from '../../store/carWashes/carWashes-slice';

function PopupWithFilters() {
	const dispatch = useDispatch();
	const { listServices, listTypes } = useSelector(selectFilters);
	const [checkedOpened, setCheckedOpened] = useState(false);
	const [checkedAroundClock, setCheckedAroundClock] = useState(false);
	const [checkedRaiting, setCheckedRaiting] = useState(false);

	const [arr, setArr] = useState([]);

	const request = {
		opened: checkedOpened ? `is_open=${checkedOpened}` : '',
		aroundClock: checkedAroundClock
			? `is_around_the_clock=${checkedAroundClock}`
			: '',
		raiting: checkedRaiting ? `high_rating=${checkedRaiting}` : '',
	};

	const handleChangeOpened = () => {
		setCheckedOpened(!checkedOpened);
	};

	const handleChangeAroundClock = () => {
		setCheckedAroundClock(!checkedAroundClock);
	};

	const handleChangeRaiting = () => {
		setCheckedRaiting(!checkedRaiting);
	};

	const handleClick = (text, active) => {
		setArr(!active ? [...arr, text] : arr.filter((i) => i !== text));
	};

	console.log(arr);

	useEffect(() => {
		dispatch(
			fetchListFilteredCarWashes(
				`${request.opened}&${request.aroundClock}&${request.raiting}`
			)
		);
	}, [dispatch, request.aroundClock, request.opened, request.raiting]);

	useEffect(() => {
		dispatch(fetchListServices());
		dispatch(fetchListTypes());
	}, [dispatch]);

	return (
		<div className={styles.popup}>
			<div className={styles.container}>
				<h2 className={styles.header}>Фильтр</h2>
				<div className={styles.filters}>
					<FilterWithCheckbox
						onChange={handleChangeOpened}
						checked={checkedOpened}
						filterName="Открыто сейчас"
					/>
					<FilterWithCheckbox
						onChange={handleChangeAroundClock}
						checked={checkedAroundClock}
						filterName="Круглосуточно"
					/>
					<FilterWithServices
						title="Услуга"
						services={listServices}
						onClick={handleClick}
					/>
					<FilterWithServices
						title="Формат"
						services={listTypes}
						onClick={handleClick}
					/>
					<FilterWithCheckbox
						onChange={handleChangeRaiting}
						checked={checkedRaiting}
						filterName="Рейтинг 4+"
					/>
				</div>
			</div>
		</div>
	);
}

export default PopupWithFilters;
