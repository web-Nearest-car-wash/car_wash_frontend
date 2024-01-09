import React from 'react';
import PropTypes from 'prop-types';
import styles from './ServiceCheckbox.module.css';
import IconSwitchOn from '../icons/IconSwitchOn';
import IconSwitchOff from '../icons/IconSwitchOff';

function ServiceCheckbox({ checked, onChange }) {
	return (
		// eslint-disable-next-line jsx-a11y/label-has-associated-control
		<label className={styles.label}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={checked}
				onChange={onChange}
			/>
			<span className={styles.icon}>
				{checked ? <IconSwitchOn /> : <IconSwitchOff />}
			</span>
		</label>
	);
}

ServiceCheckbox.propTypes = {
	checked: PropTypes.bool,
	onChange: PropTypes.func,
};

ServiceCheckbox.defaultProps = {
	checked: false,
	onChange: () => {},
};

export default ServiceCheckbox;
