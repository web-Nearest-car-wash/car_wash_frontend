import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterWithCheckbox.module.css';
import ServiceCheckbox from '../ServiceCheckbox/ServiceCheckbox';

function FilterWithCheckbox({ filterName, onChange, checked }) {
	return (
		<p className={styles.filter}>
			{filterName}
			<ServiceCheckbox checked={checked} onChange={onChange} />
		</p>
	);
}

FilterWithCheckbox.propTypes = {
	filterName: PropTypes.string,
	onChange: PropTypes.func,
	checked: PropTypes.bool,
};

FilterWithCheckbox.defaultProps = {
	filterName: '',
};

export default FilterWithCheckbox;
