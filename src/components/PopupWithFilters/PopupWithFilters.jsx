import React from 'react';
import ServiceCheckbox from '../UI/ServiceCheckbox/ServiceCheckbox';
import styles from './PopupWithFilters.module.css';

function PopupWithFilters() {
	return (
		<div className={styles.popup}>
			<div className={styles.container}>
				<h2 className={styles.header}>Фильтр</h2>
				<div className={styles.filters}>
					<p className={styles.filter}>
						Открыто сейчас
						<ServiceCheckbox />
					</p>
				</div>
			</div>
		</div>
	);
}

export default PopupWithFilters;
