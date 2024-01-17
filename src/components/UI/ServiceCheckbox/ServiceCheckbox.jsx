import { useId } from 'react';
import PropTypes from 'prop-types';
import styles from './ServiceCheckbox.module.css';
import IconSwitchOn from '../icons/IconSwitchOn';
import IconSwitchOff from '../icons/IconSwitchOff';

function ServiceCheckbox({ checked, onChange }) {
	const id = useId();

	return (
		<label htmlFor={id} className={styles.label}>
			<input
				id={id}
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
