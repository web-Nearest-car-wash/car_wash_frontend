import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterWithCheckbox.module.css';
import ServiceCheckbox from '../ServiceCheckbox/ServiceCheckbox';

function FilterWithCheckbox({ filterName }) {
	return (
		<p className={styles.filter}>
			{filterName}
			<ServiceCheckbox />
		</p>
	);
}

FilterWithCheckbox.propTypes = {
	filterName: PropTypes.string,
};

FilterWithCheckbox.defaultProps = {
	filterName: '',
};

export default FilterWithCheckbox;
