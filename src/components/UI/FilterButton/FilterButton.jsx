import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterButton.module.css';
import IconFilter from '../icons/IconFilter';

function FilterButton({ handleClick, numberOfFilters }) {
	return (
		<div className={styles.filter}>
			<button
				aria-label="Фильтр"
				className={styles.button}
				onClick={handleClick}
			>
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
	handleClick: PropTypes.func,
	numberOfFilters: PropTypes.number,
};

FilterButton.defaultProps = {
	handleClick: () => {},
	numberOfFilters: 0,
};

export default FilterButton;
