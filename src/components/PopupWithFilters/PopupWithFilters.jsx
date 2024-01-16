import styles from './PopupWithFilters.module.css';
import FilterWithCheckbox from '../UI/FilterWithCheckbox/FilterWithCheckbox';
import FilterWithServices from '../UI/FilterWithServices/FilterWithServices';

function PopupWithFilters() {
	return (
		<div className={styles.popup}>
			<div className={styles.container}>
				<h2 className={styles.header}>Фильтр</h2>
				<div className={styles.filters}>
					<FilterWithCheckbox filterName="Открыто сейчас" />
					<FilterWithCheckbox filterName="Круглосуточно" />
					<FilterWithServices title="Услуга" />
					<FilterWithServices title="Формат" />
					<FilterWithCheckbox filterName="Рейтинг 4+" />
				</div>
			</div>
		</div>
	);
}

export default PopupWithFilters;
