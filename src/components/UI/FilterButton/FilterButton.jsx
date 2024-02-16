import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterButton.module.css';
import IconFilter from '../icons/IconFilter';

function FilterButton({ onClick, numberOfFilters }) {
	return (
		<div className={styles.filter}>
			<button aria-label="Фильтр" className={styles.button} onClick={onClick}>
				<IconFilter />
			</button>
			<p
				className={
					numberOfFilters && numberOfFilters > 0
						? styles.counter
						: styles.hidden
				}
			>
				{numberOfFilters}
			</p>
		</div>
	);
}

FilterButton.propTypes = {
	onClick: PropTypes.func,
	numberOfFilters: PropTypes.number,
};

FilterButton.defaultProps = {
	onClick: () => {},
	numberOfFilters: 0,
};

export default FilterButton;
