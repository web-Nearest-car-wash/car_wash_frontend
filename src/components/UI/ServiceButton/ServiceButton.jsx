import React from 'react';
import PropTypes from 'prop-types';
import styles from './ServiceButton.module.css';

function ServiceButton({ textButton, onClick, active }) {
	return (
		<button
			aria-label="Кнопка фильтра"
			className={`${styles.button} ${active && styles.active}`}
			onClick={onClick}
		>
			{textButton.toLocaleLowerCase()}
		</button>
	);
}

ServiceButton.propTypes = {
	onClick: PropTypes.func,
	textButton: PropTypes.string,
	active: PropTypes.bool,
};

ServiceButton.defaultProps = {
	onClick: () => {},
	textButton: 'Мойка',
	active: false,
};

export default ServiceButton;
