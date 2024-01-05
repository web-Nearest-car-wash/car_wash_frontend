import React from 'react';
import styles from './FilterButton.module.css';
import IconFilter from '../icons/IconFilter';

function FilterButton() {
	return (
		<div className={styles.filter}>
			<button aria-label="Фильтр" className={styles.button}>
				<IconFilter />
			</button>
			<p className={styles.counter}>2</p>
		</div>
	);
}

export default FilterButton;
