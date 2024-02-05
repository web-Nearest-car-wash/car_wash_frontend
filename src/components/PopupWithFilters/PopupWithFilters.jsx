import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './PopupWithFilters.module.css';
import stylesButton from '../UI/ServiceButton/ServiceButton.module.css';
import FilterWithCheckbox from '../UI/FilterWithCheckbox/FilterWithCheckbox';
import FilterWithServices from '../UI/FilterWithServices/FilterWithServices';
import RemoveSearch from '../UI/icons/RemoveSearch';
import ClearFilters from '../UI/icons/ClearFilters';
import {
	fetchListServices,
	fetchListTypes,
	selectFilters,
	openPopup,
} from '../../store/filters/filters-slice';
import { fetchListFilteredCarWashes } from '../../store/carWashes/carWashes-slice';

function PopupWithFilters() {
	const dispatch = useDispatch();
	const { listServices, listTypes, popupOpened } = useSelector(selectFilters);
	const [checkedOpened, setCheckedOpened] = useState(false);
	const [checkedAroundClock, setCheckedAroundClock] = useState(false);
	const [checkedRaiting, setCheckedRaiting] = useState(false);
	const [arrServiceButtons, setArrServiceButtons] = useState([]);
	const [arrFilters, setArrFilters] = useState([]);

	const styleActive = stylesButton.active;

	const request = {
		opened: checkedOpened ? `is_open=${checkedOpened}&` : '',
		aroundClock: checkedAroundClock
			? `is_around_the_clock=${checkedAroundClock}&`
			: '',
		raiting: checkedRaiting ? `high_rating=${checkedRaiting}&` : '',
		services:
			arrFilters.length > 0 ? `services=${encodeURI(arrFilters.join())}&` : '',
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

	const handleClickFilterButton = (e) => {
		const { classList, id, value } = e.target;
		if (classList.contains(styleActive)) {
			classList.remove(styleActive);
			setArrServiceButtons(arrServiceButtons.filter((item) => item.id !== id));
			setArrFilters(arrFilters.filter((i) => i !== value));
		} else {
			classList.add(styleActive);
			setArrServiceButtons([...arrServiceButtons, { id }]);
			setArrFilters([...arrFilters, value]);
		}
	};

	const handleApplyfilters = () => {
		dispatch(
			fetchListFilteredCarWashes(
				`${request.opened}${request.aroundClock}${request.raiting}${request.services}`
			)
		);
	};

	const handleClearFilters = () => {
		setCheckedOpened(false);
		setCheckedAroundClock(false);
		setCheckedRaiting(false);
		arrServiceButtons.map((item) =>
			document.getElementById(item.id).classList.remove(styleActive)
		);
		dispatch(
			fetchListFilteredCarWashes(
				`${request.opened}&${request.aroundClock}&${request.raiting}&${request.services}`
			)
		);
	};

	useEffect(() => {
		dispatch(fetchListServices());
		dispatch(fetchListTypes());
	}, [dispatch]);

	useEffect(() => {
		const closePopupHandler = (e) => {
			if (e.target.classList.contains(styles.opened)) {
				dispatch(openPopup(false));
			}
		};

		document.addEventListener('click', closePopupHandler);
		return () => {
			document.removeEventListener('click', closePopupHandler);
		};
	}, [dispatch]);

	return (
		<div
			className={
				popupOpened ? `${styles.popup} ${styles.opened}` : styles.popup
			}
		>
			<div className={styles.container}>
				<button
					className={styles.close}
					aria-label="Кнопка закрытия попапа"
					onClick={() => dispatch(openPopup(false))}
				>
					<RemoveSearch />
				</button>
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
						onClick={handleClickFilterButton}
					/>
					<FilterWithServices
						title="Формат"
						services={listTypes}
						onClick={handleClickFilterButton}
					/>
					<FilterWithCheckbox
						onChange={handleChangeRaiting}
						checked={checkedRaiting}
						filterName="Рейтинг 4+"
					/>
				</div>
				<div className={styles.buttons}>
					<button
						className={styles.clear}
						aria-label="Очистить фильтры"
						onClick={handleClearFilters}
					>
						<ClearFilters />
						Очистить фильтры
					</button>
					<button
						className={styles.apply}
						aria-label="Применить фильтры"
						onClick={handleApplyfilters}
					>
						Применить фильтры
					</button>
				</div>
			</div>
		</div>
	);
}

export default PopupWithFilters;
