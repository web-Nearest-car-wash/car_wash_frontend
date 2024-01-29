import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ServiceButton.module.css';

function ServiceButton({ textButton, onClick }) {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
		onClick(textButton, active);
	};

	return (
		<button
			aria-label="Кнопка фильтра"
			className={`${styles.button} ${active && styles.active}`}
			onClick={handleClick}
		>
			{textButton}
		</button>
	);
}

ServiceButton.propTypes = {
	onClick: PropTypes.func,
	textButton: PropTypes.string,
};

export default ServiceButton;
