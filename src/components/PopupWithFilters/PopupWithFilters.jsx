import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './PopupWithFilters.module.css';
import FilterWithCheckbox from '../UI/FilterWithCheckbox/FilterWithCheckbox';
import FilterWithServices from '../UI/FilterWithServices/FilterWithServices';
import {
	fetchListServices,
	fetchListTypes,
	selectFilters,
} from '../../store/filters/filters-slice';

function PopupWithFilters() {
	const dispatch = useDispatch();
	const { listServices, listTypes } = useSelector(selectFilters);

	useEffect(() => {
		dispatch(fetchListServices());
		dispatch(fetchListTypes());
	}, [dispatch]);

	return (
		<div className={styles.popup}>
			<div className={styles.container}>
				<h2 className={styles.header}>Фильтр</h2>
				<div className={styles.filters}>
					<FilterWithCheckbox filterName="Открыто сейчас" />
					<FilterWithCheckbox filterName="Круглосуточно" />
					<FilterWithServices title="Услуга" services={listServices} />
					<FilterWithServices title="Формат" services={listTypes} />
					<FilterWithCheckbox filterName="Рейтинг 4+" />
				</div>
			</div>
		</div>
	);
}

export default PopupWithFilters;
