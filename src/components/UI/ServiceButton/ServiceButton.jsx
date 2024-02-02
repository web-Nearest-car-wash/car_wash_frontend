import { useId } from 'react';
import PropTypes from 'prop-types';
import styles from './ServiceButton.module.css';

function ServiceButton({ onClick, value }) {
	const id = useId();
	return (
		<button
			id={id}
			aria-label="Кнопка фильтра"
			className={styles.button}
			onClick={onClick}
			value={value}
		>
			{value}
		</button>
	);
}

ServiceButton.propTypes = {
	onClick: PropTypes.func,
	value: PropTypes.string,
};

export default ServiceButton;
